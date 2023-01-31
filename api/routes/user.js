const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

//users routes
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/viewallusers", UserController.viewAllUsers);

module.exports = router;
