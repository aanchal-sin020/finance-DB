const express = require("express");
const router = express.Router();

const {
  getSummary,
  getCategoryBreakdown,
} = require("../controllers/dashboardController");

// Summary
router.get("/summary", getSummary);

// Category breakdown
router.get("/categories", getCategoryBreakdown);

module.exports = router;