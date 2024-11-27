const express = require("express");
const { addPerson, getPeople } = require("../controllers/people.js");

const router = express.Router();

router.get("/", addPerson)

router.post("/", getPeople)

module.exports = router