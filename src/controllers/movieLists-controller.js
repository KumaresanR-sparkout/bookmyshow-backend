import Movies from '../models/movies.model'
import MovieScreen from '../models/screen.model'
import { sendSuccessResponse,sendErrorResponse } from '../utils/commonResponse-utils'

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

                sendSuccessResponse(res,201, "Movies lists created successfully", { movieScreen, movieList })

            }
            catch (error) {
                sendErrorResponse(res,500, error.message)
            }
        }
        else {
            sendErrorResponse(res,404, "no movies found to create")
        }
    }
    catch (error) {
        sendErrorResponse(res,500, error.message)
    }
}