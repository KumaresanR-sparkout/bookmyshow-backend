import Movies from '../models/movies.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'
export const saveMovieList = async (req, res) => {
    try {
        console.log(Object.keys(req.body).length)
        if (Object.keys(req.body).length != 0) {

            try {
                const movies = await new Movies(req.body).save()
                if (movies) {
                    res.status(201).send(sendSuccessResponse(201, "movie list has been successfully created", movies))
                }
            }
            catch (error) {
                res.status(500).send(sendErrorResponse(500, error.mesage))
            }

        }
        else {
            res.status(404).send(sendErrorResponse(404, "no movies found to create"))
        }
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.mesage))
    }
}