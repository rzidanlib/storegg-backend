var express = require("express");
var router = express.Router();
const { index, actionSignin } = require("./controller");

/* GET home page. */
router.get("/", index);
router.post("/", actionSignin);

module.exports = router;
