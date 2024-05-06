import Movies from '../models/movies.model'
import Screens from '../models/screen.model'
import Theatres from '../models/theatre.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/response-handler-utils'

export const saveMovieList = async (req, res) => {

    if (Object.keys(req.body).length == 0) {
        sendErrorResponse(res, 404, "no movies found to create")
    }

    try {
        const listMovie = req.body

        const screens = await new Screens(
            listMovie.screens
        ).save()

        const movies = await new Movies({
            screen_id: listMovie.screens.screen_id,
            ...listMovie.movies,
            screen_ref: screens._id
        }).save()

        const theatre = await new Theatres({
            screen_ref: screens._id,
            movie_ref: movies._id,
            ...listMovie.theatre
        }).save()

        sendSuccessResponse(res, 201, "Movies lists created successfully", { screens, movies, theatre })
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}

