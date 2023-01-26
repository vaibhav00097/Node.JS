const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const auth = require("../middalware/auth");

router.get("/", (req, resp) => {
  resp.render("index");
});

router.post("/adduser", async (req, resp) => {
  try {
    const user = new User(req.body);
    await user.save();
    resp.render("index", { msg: "Registrion successfully..!!" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/display", auth, async (req, resp) => {
  try {
    const users = await User.find();
    resp.render("display", { data: users });
  } catch (error) {
    console.log(error);
  }
});

router.get("/loginpage", (req, resp) => {
  resp.render("login");
});

router.post("/login", async (req, resp) => {
  try {
    const data = await User.findOne({ email: req.body.email });

    const isvalid = await bcrypt.compare(req.body.password, data.password);
    if (isvalid) {
      const token = await data.generateToken();
      resp.cookie("jwt", token);
      resp.redirect("display");
    } else {
      resp.render("login", { msg: "Invalid email or password" });
    }
  } catch (error) {
    resp.render("login", { msg: "Invalid email or password" });
  }
});

router.get("/logout", auth, async (req, resp) => {
  try {
    const user = req.user;
    const token = req.token;

    user.Tokens = user.Tokens.filter((ele) => {
      return ele.token != token;
    });

    await user.save();
    resp.clearCookie("jwt");
    resp.render("login");
  } catch (error) {
    console.log(error);
  }
});

router.get("/logoutall", auth, async (req, resp) => {
  try {
    const user = req.user;
    const token = req.token;

    user.Tokens = [];

    await user.save();
    resp.clearCookie("jwt");
    resp.render("login");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
