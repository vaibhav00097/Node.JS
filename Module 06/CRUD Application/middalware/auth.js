const jwt = require("jsonwebtoken");
const User = require("../model/User");

const auth = async (req, resp, next) => {
  const token = req.cookies.jwt;
  try {
    const userInfo = await jwt.verify(token, "thisismytokenkeyyy");

    const user = await User.findOne({ _id: userInfo._id });

    const tk = user.Tokens.filter((ele) => {
      return ele.token == token;
    });
    if (tk[0] == undefined) {
      resp.render("login", { msg: "Please login first" });
    } else {
      req.user = user;
      req.token = token;

      next();
    }
  } catch (error) {
    resp.render("login", { msg: "Please login first" });
  }
};

module.exports = auth;
