const User = require("../models/User");

exports.getAllUsers = async (req, res, next) => {
  try {
    let [user, _] = await User.findAll();

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    console.log(req.body);
    let { idusers, bio } = req.body;
    let user = new User(idusers, bio);

    user = await user.save();

    console.log(user);

    res.status(201).json({ message: "user created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let { idusers } = req.body;

    let [user, _] = await User.findUser(idusers);

    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
