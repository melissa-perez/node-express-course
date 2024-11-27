const {people} = require("../data");

const getPeople = (req, res) => {
    res.stats(200).json({success: true, data: people})
}

const addPerson = (req, res)=>{
    const {name} = req.body
    if(name) {
        // status 201: object was created
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    }
    else {
        res.status(400).json({success: false, message: "Please provide a name"});
    }
}

module.exports = {addPerson, getPeople}