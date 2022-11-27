const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const crypto = require('crypto')
const createError = require('http-errors')

class articleService {
    static async articles() {
        
       const articles = await prisma.article.findMany({
            select: {
                id: true,
                slug: true,
                title: true,
                body: true,
                createdAt: true
            }
        })
        return articles
    }

    static async article(id) {
       const article = await prisma.article.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                slug: true,
                title: true,
                body: true,
                createdAt: true,
                comments: {
                    select: {
                        comment: true,
                        createdAt: true,
                        authorId: true,
                    }
                }
            }
        })
        return article
    }

    static async articleCreate(data) {
        const { slug, title, body, uid } = data
        
        const article = await prisma.article.findUnique({
            where: {
                slug
            }
        })

        if( article !== null) {
            return createError.BadRequest('This slug already exists!')
        }
        const details = [slug, title, body]

        details.forEach(updateDetails)

        async function updateDetails(item) {
            if(item === null) {
            } else {
                return createError.BadRequest('The required fields are "slug, title, body"!')
            }
        }
        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })
        
        await prisma.article.create({
            data: {
                slug: slug,
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
        const { comment, uid, articleId } = data

        const article = await prisma.article.findUnique({
            where: {
                id: articleId
            }
        })

        if(!article) {
            return createError.NotFound('Article not found!')
        }

        if( comment === null) {
            return createError.BadRequest('You are required to place a comment')
        }
        const user = await prisma.user.findUnique({
            where: {
                uid
            }
        })


        await prisma.comment.create({
            data: {
                comment: comment,
                article: {
                    connect: {
                        id: article.id
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

module.exports = articleService