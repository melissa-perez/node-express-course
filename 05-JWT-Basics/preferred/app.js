require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const loginRouter = require("./routes/login");
app.use(express.json());
app.use("/api/v1", loginRouter);
app.use(express.static("./public"));

const start = () => {
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