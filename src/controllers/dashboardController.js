const Record = require("../models/Record");

// GET DASHBOARD SUMMARY
const getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach((record) => {
      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }
    });

    const netBalance = totalIncome - totalExpense;

    res.status(200).json({
      totalIncome,
      totalExpense,
      netBalance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getCategoryBreakdown = async (req, res) => {
  try {
    const records = await Record.find();

    const categoryMap = {};

    records.forEach((record) => {
      if (!categoryMap[record.category]) {
        categoryMap[record.category] = 0;
      }

      if (record.type === "expense") {
        categoryMap[record.category] += record.amount;
      }
    });

    res.status(200).json(categoryMap);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSummary, getCategoryBreakdown };