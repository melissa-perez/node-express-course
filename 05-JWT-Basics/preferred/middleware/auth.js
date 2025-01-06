
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const StatusError = require("../errors/custom-error");

const authentication = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return response.status(StatusCodes.UNAUTHORIZED).json({ message: "unauthorized" });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const { name } = decoded;
        request.user = { name };
        next();
    } catch (error) {
        return response.status(StatusCodes.UNAUTHORIZED).json({ message: "unauthorized" });
    }
};

module.exports = authentication;