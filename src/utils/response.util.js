class CustomResponse {
  constructor() {}

  send(statusCode, message, status, data) {
    const responseObject = {
      statusCode: statusCode,
      message: message,
      status: status === true ? "SUCCESS" : "FAILED",
      data: data,
    };
    return responseObject;
  }

  sendError(statusCode, message, status, data) {
    return {
      statusCode: statusCode || 500,
      message: message || "Internal Server Error",
      status: status === true ? "SUCCESS" : "FAILED",
      data: data || null,
    };
  }
}

module.exports = CustomResponse;
