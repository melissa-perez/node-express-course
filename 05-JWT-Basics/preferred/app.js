require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routes/main");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1", mainRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);



const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
            console.log(`Go to: http://localhost:${PORT}`);
        });

    }
    catch (error) {
        console.log(error);
    }
};

start();


//jwt.sign
//jwt.verify in auth middleware