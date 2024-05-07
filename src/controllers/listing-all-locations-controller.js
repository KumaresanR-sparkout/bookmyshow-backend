import Screens from '../models/screen.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/response-handler-utils'


export const getAllLocations = async (req, res) => {
    try {
        const locations = await Screens.find()
        const filteredData = locations.reduce((locationsList, location) => {
            if (true) {
                locationsList.push(location.city)
            }
            return locationsList
        }, [])
        return sendSuccessResponse(res, 200, "listing available all location", filteredData)
    }
    catch (error) {
        return sendErrorResponse(res, 500, error.message)
    }
}