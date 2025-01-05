const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const StatusError = require("../errors/custom-error");

const logon = async (request, response) => {
    const { name, password } = request.body;

    if (!name || !password) {
        throw new StatusError("Please provide email and password", StatusCodes.BAD_REQUEST);
    }

    const token = jwt.sign({ name }, process.env.JWT_SECRET, {
        expiresIn: process.env.LIFETIME,
    });

    response.status(StatusCodes.OK).json({ msg: "User created", token });
};

const hello = async (request, response) => {
    response.status(StatusCodes.OK).json({
        msg: `Hello, ${request.name.name}`
    });
};

module.exports = { logon, hello };;