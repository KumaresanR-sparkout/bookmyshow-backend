import express from 'express'
import { saveMovieList } from '../controllers/movieLists-controller'
import { getMovieLists } from '../controllers/listAllMovie-controller'
import { verifyToken } from '../middlewares/jwtTokenVerification-middleware'
import { getAllLocations } from '../controllers/location-controller'
import { cityWiseAllReleaseMovie } from '../controllers/cityWiseReleaseMovie-controller'

const router = express.Router()
router.use(express.json())

router.post('/', verifyToken, saveMovieList)
router.get('/', getMovieLists)
router.get('/locations', getAllLocations)
router.get('/:city', cityWiseAllReleaseMovie)

export default router