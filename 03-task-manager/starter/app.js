const express = require("express");
require("dotenv").config();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const PORT = process.env.PORT || 3000;
const app = express();

//process.env.MONGO_URI = `mongodb+srv://${process.env.USER}:${process.env.PW}@cluster0.jv5qe.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority&appName=${process.env.APP_NAME}`;

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start()

