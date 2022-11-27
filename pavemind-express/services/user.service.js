const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jwt = require('../utils/jwt')
const validator = require('../utils/validation')

const createError = require('http-errors')

const saltValue = parseInt(process.env.SALT_VALUE)

class authService {

    static async register(data) {
        const { email } = data

        if (!email) {
            throw createError.Unauthorized('Email is required')
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            throw createError.Unauthorized('User already exists')
        }

        if (data.password !== data.confirmPassword) {
            throw createError.Unauthorized('Password does not match')
        }
        validator.verifyEmail(email)
        validator.verifyPassword(data.password)

        data.password = bcrypt.hashSync(data.password, saltValue)
        data.uid = crypto.randomBytes(9).toString('hex')
        data.dob = new Date(data.dob)

        await prisma.user.create({
            data: {
                email: email,
                password: data.password,
                uid: data.uid,
            }
        })
        return
    }

    static async login(data) {
        const { email, password } = data
        if (!email && !password) {
            throw createError.Unauthorized('Email and password are required')
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            throw createError.NotFound('User not found')
        }

        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) throw createError.Unauthorized('Email address or password not valid')


        const payload = {
            uid: user.uid
        }
        const accessToken = await jwt.signAccessToken(payload)

        return { accessToken }
    }

    static async info(data) {
        const { uid } = data;

        const user = await prisma.user.findUnique({
            where: {
                uid
            },
            select: {
                uid: true,
                createdAt: true,
                email: true,
                emailVerified: true,
                role: true,
            }
        })

        if (!user) {
            throw createError.Unauthorized('User is not logged in!')
        }

        return user
    }

    static async settings(data) {
        const { uid, firstName, lastName, dob, uni } = data
        const user = await prisma.user.findUnique({
            where: {
                uid: uid
            }
        })

        if (dob !== null) {
            validator.verifyDate(dob)
        }

        const date = new Date(dob)
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                firstName,
                lastName,
                dob: date,
                uni
            },
        })

        const profile = await prisma.user.findUnique({
            where: {
                uid
            },
            select: {
                uid: true,
                createdAt: true,
                email: true,
                emailVerified: true,
                role: true,
                firstName: true,
                lastName: true,
                dob: true,
                uni: true   
            }
        })
        return profile
    }

    static async passwordChange(data) {
        const { uid, oldPassword, newPassword, confirmPassword } = data
    

        if (!oldPassword && !newPassword && !confirmPassword) {
            throw createError.Unauthorized('oldPassword, newPassword and confirmPassword are required fields')
        }

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        const checkPassword = bcrypt.compareSync(oldPassword, user.password)
        if (!checkPassword) throw createError.Unauthorized('Password is not valid')

        validator.verifyPassword(newPassword)
        const hashedPassword = bcrypt.hashSync(newPassword, saltValue)

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                password: hashedPassword
            }
        })
        const success = 'Password, has been successfully changed!'
        return success
    }

}

module.exports = authService