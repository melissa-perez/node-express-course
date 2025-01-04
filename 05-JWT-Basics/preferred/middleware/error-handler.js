const { CustomAPIError } = require("../errors/custom-errors");


const errorHandlerMiddleware = (error, request, response, next) => {
    console.log(error);
    if (error instanceof CustomAPIError) {
        return response.status(error.statusCode).json({ msg: err.message });
    }
    return response.status(500).json({ msg: "Something went wrong, please try again." });
};

module.exports = errorHandlerMiddleware;