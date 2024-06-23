const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const imgRouter = require('./imgRouter')
const postsRouter = require('./postsRouter')





router.use('/user',userRouter)
router.use('/post',imgRouter)
router.use('/img',postsRouter)

module.exports = router