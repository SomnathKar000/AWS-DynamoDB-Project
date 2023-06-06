const dynamoClient = require("../config/connectDB");
const customError = require("../error/custom-error");
const TABLE_NAME = "user-data-api";
const shortid = require("shortid");

const getUserData = async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };
  const data = await dynamoClient.scan(params).promise();
  res.status(200).json({ success: true, msg: "Get USER DATA", data });
};
const updateUserData = (req, res) => {
  res.status(200).json({ success: true, msg: "Update USER DATA" });
};
const createUserData = async (req, res) => {
  const { email, password } = req.body;
  const Item = {
    id: shortid.generate(),
    email: email,
    password: password,
  };
  const params = {
    TableName: TABLE_NAME,
    Item,
  };

  dynamoClient.put(params, (error, data) => {
    if (error) {
      console.log(error);
      throw new customError(error.message, 400);
    } else {
      console.log(data);
      return res
        .status(200)
        .json({ success: true, msg: "create USER DATA", data });
    }
  });
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
