
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const StatusError = require("../errors/custom-error");

const authentication = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new StatusError("No token provided", StatusCodes.UNAUTHORIZED);
    }

    const token = authHeader.split(' ')[1];
    console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { name } = decoded;
        request.name = { name };
        next();
    } catch (error) {
        throw new StatusError("Not authorized to access this route.", StatusCodes.UNAUTHORIZED);
    }
};

module.exports = authentication;