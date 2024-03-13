let errorMessages = {
  // 400 Bad Request
  "BAD_REQUEST": {
    message: "Bad Request",
    statusCode: 400,
  },
  
  // 401 Unauthorized
  "UNAUTHORIZED": {
    message: "Unauthorized",
    statusCode: 401,
  },
  
  // 403 Forbidden
  "FORBIDDEN": {
    message: "Forbidden",
    statusCode: 403,
  },
  
  // 404 Not Found
  "NOT_FOUND": {
    message: "Not Found",
    statusCode: 404,
  },
  
  // 500 Internal Server Error
  "INTERNAL_SERVER_ERROR": {
    message: "Internal Server Error",
    statusCode: 500,
  },
  // 500 Database Error
  "DATABASE_ERROR" : {
    message: "Database Error",
    statusCode: 500,
  },
  "JSONWEBTOKENERROR" : {
    message: "Please provide a valid token",
    statusCode: 500,
  },
  "TOKENEXPIREDERROR" : {
    message: "Token expired please login again to continue",
    statusCode: 500,
  },
  "TOKENNOTPROVIDED" : {
    message: "Token Not Provided",
    statusCode: 500,
  },
  // Add more error messages here...
};



module.exports = errorMessages;
