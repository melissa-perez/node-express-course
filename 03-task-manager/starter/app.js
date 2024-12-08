const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const PORT = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("Task Manager App");
})

app.use("/api/v1/tasks", tasks);



app.listen(PORT, () =>{
    console.log(`Server is listening on port: ${PORT}`);
})