import express from 'express'
import { saveMovieList } from '../controllers/movieLists-controller'
import { getMovieLists } from '../controllers/listAllMovie-controller'
import {verifyToken} from '../middlewares/jwtTokenVerification-middleware'

const router = express.Router()
router.use(express.json())

router.post('/',verifyToken, saveMovieList)
router.get('/', getMovieLists)


export default router