import Movies from '../models/movies.model'
import MovieScreen from '../models/screen.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'
export const saveMovieList = async (req, res) => {
    try {
        console.log(Object.keys(req.body).length)
        if (Object.keys(req.body).length != 0) {

            try {
                const listMovie = req.body
                const movies = {
                    screenId: listMovie.screenId, movieId: listMovie.movieId, movieName: listMovie.movieName,
                    language: listMovie.language, time: listMovie.time, types: listMovie.types, release_date: listMovie.release_date
                }

                const screen = {
                    screenId: listMovie.screenId, screen: listMovie.screen, cinema: listMovie.cinema, locality: listMovie.locality,
                    city: listMovie.city
                }

                const movieScreen = await new MovieScreen(screen).save()
                const movieList = await new Movies(movies).save()

                res.status(201).send(sendSuccessResponse(201, "Movies lists created successfully", { movieScreen, movieList }))

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