const {
  getUserData,
  updateUserData,
  createUserData,
  deleteUserData,
} = require("../controllers/user-controller");

const express = require("express");

const router = express.Router();

router.route("/").get(getUserData);
router.route("/create").post(createUserData);
router.route("/update").patch(updateUserData);
router.route("/delete").delete(deleteUserData);

module.exports = router;
