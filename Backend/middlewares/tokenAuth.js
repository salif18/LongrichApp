const jwt = require("jsonwebtoken");
require("dotenv").config();
config();
export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.KEY_TOKEN);
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (err) {
    console.error(err);
    res.status(404).json({ err });
  }
};
