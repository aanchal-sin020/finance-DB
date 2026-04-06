const Record = require("../models/Record");

// CREATE RECORD
const createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    if (!amount || !type || !category) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const record = new Record({
      amount,
      type,
      category,
      date,
      note,
    });

    const savedRecord = await record.save();

    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL RECORDS
const getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRecord, getRecords };