import express from 'express'
import { adminLoginAccount } from '../controllers/admin-login-controller'
import { visitorLoginAccount } from '../controllers/visitor-login-controller'

const router = express()
router.use(express.json())

router.post('/login-admin', adminLoginAccount)
router.post('/login-visitor', visitorLoginAccount)

export default router