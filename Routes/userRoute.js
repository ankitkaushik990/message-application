const express = require("express");
const router = express.Router();
const {
  sendMessage,
  seeMessage,
  senMessage,
} = require("../Controller/userController");

router.route("/message").post(sendMessage);

router.route("/seeMessage").get(seeMessage);

router.route("/mes").post(senMessage);

module.exports = router;
