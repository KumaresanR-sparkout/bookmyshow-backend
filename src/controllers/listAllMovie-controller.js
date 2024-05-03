import Movies from '../models/movies.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/commonResponse-utils'

export const getMovieLists = async (req, res) => {
    try {
        const movieLists = await Movies.aggregate([
            {
                $lookup: {
                    from: "moviescreens",
                    localField: "screenId",
                    foreignField: "screenId",
                    as: "cinema_details"
                }
            }
        ])
        sendSuccessResponse(res, 200, "listing all movies in cinemas", movieLists)
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}
