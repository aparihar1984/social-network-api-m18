// Imports
const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// Route -> http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

// Route -> http://localhost:3001/api/users/:userId
router.route("/:userId").get(getSingleUser)
router.route("/:userId").put(updateUser)
router.route("/:userId").delete(deleteUser);

// Exports
module.exports = router;