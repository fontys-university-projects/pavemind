const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const crypto = require('crypto')
const createError = require('http-errors')

class communityService {
    static async posts() {

        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                body: true,
                createdAt: true,
                authorId: true,
                comments: {
                    select: {
                        comment: true,
                        createdAt: true,
                        authorId: true,
                    }
                }
            }
        })
        return posts
    }

    static async post(data) {
        const { id } = data

        const post = await prisma.post.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                body: true,
                createdAt: true,
                authorId: true,
                comments: {
                    select: {
                        comment: true,
                        createdAt: true,
                        authorId: true,
                    }
                }
            }
        })
        return post
    }

    static async postCreate(data) {
        const { title, body, uid } = data

        const details = [title, body]

        details.forEach(updateDetails)
        async function updateDetails(item) {
            if (item === null) {
            } else {
                return createError.BadRequest('The required fields are "title, body"!')
            }
        }

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        await prisma.post.create({
            data: {
                title: title,
                body: body,
                author: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })

        return
    }

    static async commentCreate(data) {
        const { comment, uid, postId } = data
        console.log(data)
        const post = await prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })

        if (!post) {
            return createError.NotFound('Post not found!')
        }

        if (comment === null) {
            return createError.BadRequest('You are required to place a comment')
        }

        await prisma.comment.create({
            data: {
                comment: comment,
                post: {
                    connect: {
                        id: postId
                    }
                },
                author: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })

        return
    }
}

module.exports = communityService