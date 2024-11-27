const {people} = require("../data");

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
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

const getPerson = (req, res) => {
    const { id } = req.params
    if (id) {
        const person = people.find((person) => person.id === Number(id))
        if (!person) {
            res.status(404).json({success: false, message: "Id not found."})
        }
        res.status(200).json({success: true, data: person})
    }
}

const deletePerson = (req, res) => {
    const { id } = req.params
    if (id) {
        const person = people.find((person) => person.id === Number(id))
        if (!person) {
            res.status(404).json({success: false, message: "Id not found."})
        }
        const filterPeople = people.filter((person) => person.id !== Number(id))
        res.status(200).json({success: true, data: filterPeople})
    }
}

module.exports = {addPerson, getPeople, getPerson, deletePerson }