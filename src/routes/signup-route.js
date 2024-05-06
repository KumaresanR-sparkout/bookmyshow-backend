import express from 'express'
import { signupAccount } from '../controllers/signup-controller'
import { signupAdminMiddleware } from '../middlewares/signup-admin-middleware'
import { signupVisitorMiddleware } from '../middlewares/signup-visitor-middleware'
import { verifyOtp } from '../middlewares/verify-otp-middleware'

const router = express.Router()
router.use(express.json())

router.post('/admin', signupAdminMiddleware, verifyOtp, signupAccount)
router.post('/visitor', signupVisitorMiddleware, verifyOtp, signupAccount)

export default router