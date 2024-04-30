import express from 'express'
import { otpGenerator } from '../controllers/otp-controller'

const router = express.Router()
router.use(express.json())

router.post('/', otpGenerator)

export default router