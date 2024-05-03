import Movies from '../models/movies.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/commonResponse-utils'

export const getMovieLists = async (req, res) => {
    try {
        const movieLists = await Movies.find().populate('screenRef').exec()
        sendSuccessResponse(res, 200, "listing all movies in cinemas", movieLists)
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}
