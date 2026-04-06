const express = require("express");
const router = express.Router();

const { createRecord, getRecords } = require("../controllers/recordController");
const { checkRole } = require("../middleware/authMiddleware");

// Only admin & analyst can create
router.post("/", checkRole(["admin", "analyst"]), createRecord);

// Everyone can view
router.get("/", getRecords);

module.exports = router;