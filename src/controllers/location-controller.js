import MovieScreen from '../models/screen.model'
import { sendSuccessResponse, sendErrorResponse } from '../utils/commonResponse-utils'


export const getAllLocations = async (req, res) => {
    try {
        const locations = await MovieScreen.find()
        const filteredData = locations.reduce((acc, crv) => {
            if (true) {
                acc.push(crv.city)
            }
            return acc
        }, [])
        sendSuccessResponse(res, 200, "listing available all location", filteredData)
    }
    catch (error) {
        sendErrorResponse(res, 500, error.message)
    }
}