const jwt = require("jsonwebtoken");
const { CustomAPIError } = require("../errors/custom-errors");
const logon = async (request, response) => {
    const { name, password } = request.body;
    console.log(name, password);

    if (!name || !password) {
        throw new CustomAPIError("Please provide email and password");
    }
    const token = jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn: process.env.LIFETIME });
    response.status(200).json({ msg: "User created", token });
};

const hello = async (request, response) => {
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error("No token provided");
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
    } catch (error) {
        throw new CustomAPIError("Not authorized to access this route.");
    }

    console.log(token);
    console.log(request.headers);
    response.status(200).json({ msg: `Hello, Melissa Perez`, secret: `secret data` });

};

module.exports = { logon, hello };