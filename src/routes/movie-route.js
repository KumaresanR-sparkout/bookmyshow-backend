import express from 'express'
import { saveMovieList } from '../controllers/creating-movie-list-controller'
import { getMovieLists } from '../controllers/listing-all-movie-controller'
import { verifyToken } from '../middlewares/jwt-token-verification-middleware'
import { getAllLocations } from '../controllers/listing-all-locations-controller'
import { theaterWiseMovie } from '../controllers/listing-movie-theatres-controller'
import { theatreReleaseMovies } from '../controllers/listing-theater-release-movie-controller'
import { cityWiseAllReleaseMovie } from '../controllers/city-wise-release-movie-controller'

const router = express.Router()
router.use(express.json())

router.post('/', verifyToken, saveMovieList)
router.get('/', getMovieLists)
router.get('/locations', getAllLocations)
router.get('/:city', cityWiseAllReleaseMovie)
router.get('/theater/:movie', theaterWiseMovie)
router.get('/cinema/:cinema', theatreReleaseMovies)

export default router