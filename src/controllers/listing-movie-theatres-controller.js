import Movies from '../models/movies.model'
import Screens from '../models/screen.model'
import Theatres from '../models/theatre.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/response-handler-utils'


export const theaterWiseMovie = async (req, res) => {

    try {
        const theaterWiseMovie = await Theatres.find()
            .populate({ path: 'movie_ref', select: ['movie_name'] }).populate({ path: 'screen_ref', select: ['cinema', 'locality', 'city'] })
            .then((movie) => movie.filter(movie => movie.movie_ref.movie_name == req.params.movie))

        sendSuccessResponse(res, 200, "data fetched successfully", theaterWiseMovie)
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }

}