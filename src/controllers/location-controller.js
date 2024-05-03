import MovieScreen from '../models/screen.model'
import { sendSuccessResponse } from '../utils/successResponse'
import { sendErrorResponse } from '../utils/errorResponse'

export const getAllLocations = async (req, res) => {
    try {
        const locations = await MovieScreen.find()
        const filteredData = locations.reduce((acc, crv) => {
            if (true) {
                acc.push(crv.city)
            }
            return acc
        }, [])
        res.status(200).send(sendSuccessResponse(200, "listing available all location", filteredData))
    }
    catch (error) {
        res.status(500).send(sendErrorResponse(500, error.message))
    }
}