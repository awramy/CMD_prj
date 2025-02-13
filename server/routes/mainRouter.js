const Router = require('express')
const router = new Router()

const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')

router.use('/', userRouter)
router.use('/', productRouter)
router.use('/', basketRouter)

module.exports = router
