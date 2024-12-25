const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/:userId", userController.getUserProfile);
router.put("/:userId", userController.updateUserProfile);

module.exports = router;
