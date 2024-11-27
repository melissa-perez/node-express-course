const express = require("express");
const { addPerson, getPeople, getPerson, deletePerson } = require("../controllers/people.js");

const router = express.Router();

router.get("/", getPeople)

router.get("/:id", getPerson)

router.post("/", addPerson)

router.delete("/:id", deletePerson)

//router.route("/").get(getPeople).post(addPerson)

module.exports = router