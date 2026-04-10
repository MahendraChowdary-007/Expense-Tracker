const Expense = require("../models/expense.model");

exports.addExpense = async (req, res) => {
  const expense = await Expense.create({ ...req.body, user: req.user.id });
  res.json(expense);
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user.id });
  res.json(expenses);
};