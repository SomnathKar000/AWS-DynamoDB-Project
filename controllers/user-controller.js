const customError = require("../error/custom-error");

const getUserData = (req, res) => {
  res.status(200).json({ success: true, msg: "Get USER DATA" });
};
const updateUserData = (req, res) => {
  res.status(200).json({ success: true, msg: "Update USER DATA" });
};
const createUserData = (req, res) => {
  res.status(200).json({ success: true, msg: "create USER DATA" });
};
const deleteUserData = (req, res) => {
  res.status(200).json({ success: true, msg: "delete USER DATA" });
};
module.exports = {
  getUserData,
  updateUserData,
  createUserData,
  deleteUserData,
};
