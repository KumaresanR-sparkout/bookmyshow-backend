import Movies from '../models/movies.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'

export const getMovieLists =async(req,res)=>{
    try{
        const movieLists=await Movies.find()
        if(movieLists[0]){
            res.status(200).send(sendSuccessResponse(200,"list of movies generated",movieLists))
        }
        else{
            res.status(404).send(sendErrorResponse(404,"no movies found to list"))
        }
    }
    catch(error){
        res.status(500).send(sendErrorResponse(500,error.message))
    }
}
