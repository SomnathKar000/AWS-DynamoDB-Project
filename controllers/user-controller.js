const dynamoClient = require("../config/connectDB");
const customError = require("../error/custom-error");
const validator = require("email-validator");
const TABLE_NAME = "user-data-api";
const shortid = require("shortid");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  if (!validator.validate(email)) {
    throw new customError("Enter a valid email", 400);
  }

  let params = {
    TableName: TABLE_NAME,
    Key: {
      email: email,
    },
  };
  await dynamoClient.get(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(data);
      return res.status(400).json({ success: false, msg: "New error" });
    }
  });

  const Id = shortid.generate();
  const salt = bcryptjs.genSaltSync(10);
  const securePassword = bcryptjs.hashSync(password, salt);

  let Item = {
    id: Id,
    email,
    password: securePassword,
  };
  params = {
    TableName: TABLE_NAME,
    Item,
  };

  const token = jwt.sign({ Id }, process.env.JWT_SECRET);

  dynamoClient.put(params, (error, data) => {
    if (error) {
      // console.log(error);
      throw new customError(error.message, 400);
    } else {
      console.log(data);
      return res
        .status(200)
        .json({ success: true, msg: "create USER DATA", token });
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
