import express from 'express'
import { adminLoginAccount } from '../controllers/adminLogin-controller'
import { visitorLoginAccount } from '../controllers/visitorLogin-controller'

const router = express()
router.use(express.json())

router.post('/login-admin', adminLoginAccount)
router.post('/login-visitor', visitorLoginAccount)

export default router