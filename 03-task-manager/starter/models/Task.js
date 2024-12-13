const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Must provide name."],
        trim: true,
        maxlength: [ 20, "Name cannot be longer than 20 characters."]

    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema);