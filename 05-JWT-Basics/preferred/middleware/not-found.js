const { StatusCodes } = require("http-status-codes");

const notFound = (request, response) => response.status(StatusCodes.NOT_FOUND).send("Route does not exist");

module.exports = notFound;