export const sendSuccessResponse = (res, statusCode, message, data) => {
    const responseData = {
        "statusCode": statusCode,
        "status": true,
        "message": message,
        "body": data
    }
    return res.status(statusCode).json(responseData)
}

export const sendErrorResponse = (res, statusCode, message) => {
    const responseData = {
        "statusCode": statusCode,
        "status": false,
        "message": message
    }   
    return res.status(statusCode).json(responseData)
}