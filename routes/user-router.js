const express = require("express");

const router = express.Router();

router.route("/get").post((req, res) => {
  res.status(200).json({ success: true, msg: "Get the user data" });
});

module.exports = router;
