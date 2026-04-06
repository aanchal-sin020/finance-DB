const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const user = new User({
      name,
      email,
      role,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers };