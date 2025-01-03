const { createStatusError } = require("../errors/custom-errors");

const login = async (request, response) => {
    const { name, password } = request.body;
    console.log(name, password);

    if (!name || !password) {
        throw createStatusError("Please provide email and password", 400);
    }
    response.send("Fake login/register/signup route");
};

const hello = async (request, response) => {
    response.status(200).json({ msg: `Hello, Melissa Perez`, secret: `secret data` });

};

module.exports = { login, hello };