const article = require('../services/article.service')
const createError = require('http-errors')
const e = require('express')

class articleController {

    static articles = async (req, res, next) => {

        try {
            const data = await article.articles()
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

    static article = async (req, res, next) => {

        try {
            const data = await article.article(req.params.articleId)
            res.status(200).json({
                status: true,
                message: "Article",
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
            console.log(e)
        }
    }

    static articleCreate = async (req, res, next) => {

        try {
            const body = req.body
            const usr = req.user
            const merge = {...body, ...usr}
            const data = await article.articleCreate(merge)
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

    // static commentCreate = async (req, res, next) => {

    //     try {
    //         const body = req.body
    //         const usr = req.user
    //         const articleId = {articleId: req.params.articleId}
    //         const merge = {...body, ...articleId, ...usr}
    //         const data = await article.commentCreate(merge)
    //         res.status(200).json({
    //             status: true,
    //             message: "Comment Creation",
    //             data
    //         })
    //     } catch (e) {
    //         next(createError(e.statusCode, e.message))
    //         console.log(e)
    //     }
    // }
}

module.exports = articleController