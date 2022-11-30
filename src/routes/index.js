const express = require("express");
const router = express.Router();

const { tossRouter } = require("./tossRouter");

router.use("/toss", tossRouter);

module.exports = router;
