const express = require("express");

const tossRouter = express.Router();

const tossController = require("../controllers/tossController");

tossRouter.get("", tossController.tossGet);

module.exports = { tossRouter };
