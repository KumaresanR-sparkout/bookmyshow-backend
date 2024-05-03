import Movies from '../models/movies.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/commonResponse-utils'

export const cityWiseAllReleaseMovie = async (req, res) => {
    try {
        console.log(req.params.city)
        const cityWiseMovieLists = await Movies.find()
            .populate({ path: 'screenRef', match: { city: { $eq: req.params.city } }, select: ['screen'] }).exec()
        sendSuccessResponse(res, 200, "listing all movies in cinemas", cityWiseMovieLists)
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}

