const router = require("express").Router();
const { addExpense, getExpenses } = require("../controllers/expense.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, addExpense);
router.get("/", auth, getExpenses);

module.exports = router;