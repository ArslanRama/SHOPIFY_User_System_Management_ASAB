
const signup = (req, res) => {
  res.render("signup");
};
const User = require("../models/UserSchema");
const signupPost = (req, res) => {
  const newUser = new User(req.body);
  console.log("New user created:", newUser);
  newUser.save(() => {
    res.redirect("/login");
  });
};

module.exports = { signup, signupPost };