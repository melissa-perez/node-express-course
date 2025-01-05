const { StatusCodes } = require("http-status-codes");
const StatusError = require("../errors/custom-error");

const errorHandler = (error, request, response, next) => {
    if (error instanceof StatusError) {
        return response.status(error.statusCode).json({ msg: error.message });
    }
    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: "Something went wrong, please try again." });
};

module.exports = errorHandler;