const customError = require("../error/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof customError) {
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }
  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
};

module.exports = errorHandler;
