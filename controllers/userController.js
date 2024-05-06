// Imports
const { User, Thought } = require("../models");

// Getting all users
const userController = {
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: "thoughts", select: "-__v" })
      return res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Getting a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: "thoughts", select: "-__v" })
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creating a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Updating a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Deleting a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.status(200).json({
        message: "User has been deleted!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

// Exports
module.exports = userController;