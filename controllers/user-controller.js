const dynamoClient = require("../config/connectDB");
const customError = require("../error/custom-error");
const TABLE_NAME = "user-data-api";
const shortid = require("shortid");
const jwt = require("jsonwebtoken");

const getUserData = async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };
  const data = await dynamoClient.scan(params).promise();
  res.status(200).json({ success: true, msg: "Get USER DATA", data });
};

const updateUserData = (req, res) => {
  try {
    const token = req.headers["auth-token"];
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id,
        ...req.body,
      },
    };
    const data = dynamoClient.patch(params).promise();
    res.status(200).json({ success: true, msg: "Update USER DATA", data });
  } catch (error) {
    console.log(error);
    throw new customError(error.message, 400);
  }
};

const createUserData = async (req, res) => {
  const id = shortid.generate();

  let params = {
    TableName: TABLE_NAME,
    Item: {
      id,
      ...req.body,
    },
  };

  const token = jwt.sign({ id }, process.env.JWT_SECRET);

  await dynamoClient.put(params, (error, data) => {
    if (error) {
      console.log(error);
      throw new customError(error.message, 400);
    } else {
      console.log(data);
      return res
        .status(200)
        .json({ success: true, msg: "create USER DATA", token });
    }
  });
};

const deleteUserData = async (req, res) => {
  try {
    const token = req.headers["auth-token"];
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id,
      },
    };
    await dynamoClient.delete(params).promise();
    res.status(200).json({ success: true, msg: "Delete user data", data });
  } catch (error) {
    throw new customError(error.message, 400);
  }
};
module.exports = {
  getUserData,
  updateUserData,
  createUserData,
  deleteUserData,
};
