const dynamoClient = require("../config/connectDB");
const customError = require("../error/custom-error");

const getUserData = async (req, res) => {
  const TABLE_NAME = "user-table";
  const params = {
    TableName: TABLE_NAME,
  };
  const data = await dynamoClient.scan(params).promise();
  console.log(data);
  res.status(200).json({ success: true, msg: "Get USER DATA", data });
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
