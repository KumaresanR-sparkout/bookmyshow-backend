import Movies from '../models/movies.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/response-handler-utils'

export const cityWiseAllReleaseMovie = async (req, res) => {
    try {
        const cityWiseMovieLists = await Movies.find()
            .populate({ path: 'screen_ref', match: { city: { $eq: req.params.city } }, select: ['screen', 'city'] })
            .then((data) => data.filter(data => data.screen_ref != null))

        return sendSuccessResponse(res, 200, "listing all movies in selected city", cityWiseMovieLists)
    }
    catch (error) {
        return sendErrorResponse(res, 500, error.message)
    }
}

