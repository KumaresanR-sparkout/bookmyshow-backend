import Movies from '../models/movies.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'

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
        res.status(200).send(sendSuccessResponse(200, "listing all movies in cinemas", movieLists))
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.message))
    }
}
