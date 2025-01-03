const express = require("express");
const { login, hello } = require("../controllers/main");
const router = express.Router();


router.route("/logon").post(login);
router.route("/hello").get(hello);

module.exports = router;