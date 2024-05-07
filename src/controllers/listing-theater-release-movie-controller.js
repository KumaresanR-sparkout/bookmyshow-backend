import Theatres from '../models/theatre.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/response-handler-utils'

export const theatreReleaseMovies = async (req, res) => {
    try {
        console.log(req.params.cinema)
        const theatres = await Theatres.find()
            .populate({ path: 'screen_ref', select: ['screen', 'cinema'] })
            .populate({ path: 'movie_ref', select: ['movie_name', 'language'] })
            .then(cinema => cinema.filter(cinema => cinema.screen_ref.cinema == req.params.cinema))
        return sendSuccessResponse(res, 200, "All released movie in theatre", theatres)
    }
    catch (error) {
        return sendErrorResponse(res, 500, error.message)
    }
}
