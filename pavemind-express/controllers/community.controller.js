const community = require('../services/community.service')
const createError = require('http-errors')
const e = require('express')

class communityController {
    static posts = async (req, res, next) => {

        try {
            const data = await community.posts()
            res.status(200).json({
                status: true,
                message: 'Articles',
                data: data
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static post = async (req, res, next) => {

        try {
            const data = await community.post(req.params.id)
            res.status(200).json({
                status: true,
                message: "Article",
                data
            })
        } catch (e) {
            // next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static postCreate = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await community.postCreate(merge)
            res.status(200).json({
                status: true,
                message: "Article Creation",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static commentCreate = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const postId = {postId: req.params.postId}
            const merge = {...body, ...postId, ...usr}
            const data = await community.commentCreate(merge)
            res.status(200).json({
                status: true,
                message: "Comment Creation",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }
}

module.exports = communityController