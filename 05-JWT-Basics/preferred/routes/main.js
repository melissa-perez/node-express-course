const express = require("express");
const { logon, hello } = require("../controllers/main");
const router = express.Router();


router.route("/logon").post(logon);
router.route("/hello").get(hello);

module.exports = router;