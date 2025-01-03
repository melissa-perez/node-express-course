class StatusError extends Error {
    constructor(message, resultCode) {
        super(message);
        this.statusCode = resultCode;
    }
}

const createStatusError = (msg, code) => {
    return new StatusError(msg, code);
};

module.exports = { createStatusError, StatusError };