const router = require('express').Router()
const article = require('../controllers/article.controller')
const auth = require('../middlewares/auth')
const role = require('../middlewares/privilege')


router.get('/all', article.articles )

router.get('/:articleId', article.article)

router.post('/new', auth, role('Author'), article.articleCreate)

// router.post('/:articleId/comment/new', auth, article.commentCreate)


module.exports = router