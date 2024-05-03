import moviesModel from '../models/movies.model'
import Movies from '../models/movies.model'
import MovieScreen from '../models/screen.model'

export const cityWiseAllReleaseMovie = async (req, res) => {
    try {

        const movieList = await MovieScreen.aggregate([
            {
                $match: { city: req.params.city }
            },
            {
                $lookup: {
                    from: "movies",
                    localField: "screenId",
                    foreignField: "screenId",
                    as: "listMovies"
                }

            },
            {
                $project: {
                    "listMovies.movieId": 1,
                    "listMovies.movieName": 1,
                    "listMovies.language":1,
                    "listMovies.time":1,
                    "listMovies.types":1,
                    "listMovies.release_date":1
                }
            }
        ])
        res.send(movieList)
    }
    catch (error) {
        res.send(error.message)
    }
}

