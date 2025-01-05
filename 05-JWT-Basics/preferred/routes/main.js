const express = require("express");
const { logon, hello } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.route("/logon").post(logon);
router.route("/hello").get(authMiddleware, hello);

module.exports = router;