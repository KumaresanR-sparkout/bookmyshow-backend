import express from 'express'
import { saveMovieList } from '../controllers/movieLists-controller'

const router = express.Router()
router.use(express.json())

router.post('/', saveMovieList)

export default router