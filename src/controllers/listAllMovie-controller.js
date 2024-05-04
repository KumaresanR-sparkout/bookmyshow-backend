import Movies from '../models/movies.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/responseHandler-utils'

export const getMovieLists = async (req, res) => {
    try {
        const movieLists = await Movies.find().populate('screenRef').exec()
        sendSuccessResponse(res, 200, "listing all movies in cinemas", movieLists)
        return
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}
