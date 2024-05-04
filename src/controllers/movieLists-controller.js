import Movies from '../models/movies.model'
import MovieScreen from '../models/screen.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/responseHandler-utils'

export const saveMovieList = async (req, res) => {

    if (Object.keys(req.body).length == 0) {
        sendErrorResponse(res, 404, "no movies found to create")
        return
    }

    try {
        const listMovie = req.body
        const movieScreen = await new MovieScreen({
            screenId: listMovie.screenId, screen: listMovie.screen, cinema: listMovie.cinema, locality: listMovie.locality,
            city: listMovie.city
        }).save()

        const movieList = await new Movies({
            screenId: listMovie.screenId,
            movieId: listMovie.movieId, movieName: listMovie.movieName,
            language: listMovie.language, time: listMovie.time, types: listMovie.types, release_date: listMovie.release_date,
            screenRef: movieScreen._id
        }).save()

        sendSuccessResponse(res, 201, "Movies lists created successfully", { movieScreen, movieList })
        return

    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
        return
    }
}

