const express = require("express");
const { addPerson, getPeople, getPerson, deletePerson } = require("../controllers/people.js");

const router = express.Router();

router.route("/").get(getProducts)
router.route("/:productID").get(getProduct)

module.exports = router
