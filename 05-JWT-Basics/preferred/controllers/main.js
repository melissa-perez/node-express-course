const login = async (request, response) => {
    response.send("Fake login/register/signup route");
};

const hello = async (request, response) => {
    response.status(200).json({ msg: `Hello, Melissa Perez`, secret: `secret data` });

};

module.exports = { login, hello };