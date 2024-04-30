export const sendErrorResponse = (statusCode, message) => {
    const responseData = {
        "statusCode": statusCode,
        "status": false,
        "message": message
    }
    return responseData
}