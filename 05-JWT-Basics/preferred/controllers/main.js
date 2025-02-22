const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const StatusError = require("../errors/custom-error");

const logon = async (request, response) => {
    const { name, password } = request.body;

    if (!name || !password) {
        throw new StatusError("Please provide email and password", StatusCodes.BAD_REQUEST);
    }
    try {
        const token = await jwt.sign({ name }, process.env.JWT_SECRET, {
            expiresIn: process.env.LIFETIME,
        });
        return response.status(StatusCodes.OK).json({ token });

    } catch (error) {
        throw new StatusError("Error in creating token", StatusCodes.BAD_REQUEST);
    }
};

const hello = async (request, response) => {
    return response.status(StatusCodes.OK).json({
        message: `Hello, ${request.user.name}. Welcome to authorized /hello`
    });
};

module.exports = { logon, hello };;