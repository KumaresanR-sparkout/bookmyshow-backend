import express from 'express'
import { saveMovieList } from '../controllers/creating-movie-list-controller'
import { getMovieLists } from '../controllers/listing-all-movie-controller'
import { verifyToken } from '../middlewares/jwt-token-verification-middleware'
import { getAllLocations } from '../controllers/listing-all-locations-controller'
import { cityWiseAllReleaseMovie } from '../controllers/city-wise-release-movie-controller'
import { theaterWiseMovie } from '../controllers/listing-movie-theatres-controller'
const router = express.Router()
router.use(express.json())

router.post('/', saveMovieList) //need to add verifyToken function
router.get('/', getMovieLists)
router.get('/locations', getAllLocations)
router.get('/:city', cityWiseAllReleaseMovie)
router.get('/theater/:movie', theaterWiseMovie)

export default router