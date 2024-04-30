export const sendSuccessResponse = (statusCode, message, data) => {
    const responseData = {
        "statusCode": statusCode,
        "status": true,
        "message": message,
        "body": data
    }
    return responseData
}