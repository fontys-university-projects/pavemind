const router = require('express').Router()
const community = require('../controllers/community.controller')
const auth = require('../middlewares/auth')


router.get('/all', community.posts )

router.get('/:id', community.post )

router.post('/post/new', auth, community.postCreate)

router.post('/:postId/comment/new', auth, community.commentCreate)


module.exports = router