import { Promise } from 'mongoose'
import Movies from '../models/movies.model'
import Screens from '../models/screen.model'
import Theatres from '../models/theatre.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/response-handler-utils'

export const saveMovieList = async (req, res) => {

    if (Object.keys(req.body).length == 0) {
        return sendErrorResponse(res, 404, "no movies found to create")
    }

    try {
        const listMovie = req.body

        const screens = new Screens(
            listMovie.screens,
        )

        const movies = new Movies({
            screen_id: listMovie.screens.screen_id,
            ...listMovie.movies,
            screen_ref: screens._id
        })

        const theatre = new Theatres({
            screen_ref: screens._id,
            movie_ref: movies._id,
            ...listMovie.theatre
        })
        screens.movie_ref = movies._id
        screens.theatre_ref = theatre._id

        await screens.save()
        await movies.save()
        await theatre.save()

        return sendSuccessResponse(res, 201, "Movies lists created successfully", { screens, movies, theatre })
    }
    catch (error) {
        return sendErrorResponse(res, 500, error.message)
    }
}

