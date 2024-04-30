import express from 'express'
import { signupAccount } from '../controllers/signup-controller'
import { signupAdminMiddleware } from '../middlewares/signupAdmin-middleware'
import { signupVisitorMiddleware } from '../middlewares/signupVisitor-middleware'
import { verifyOtp } from '../middlewares/verifyOtp-middleware'

const router = express.Router()
router.use(express.json())

router.post('/admin', signupAdminMiddleware, verifyOtp, signupAccount)
router.post('/visitor', signupVisitorMiddleware, verifyOtp, signupAccount)

export default router