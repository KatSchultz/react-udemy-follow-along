import { Expense } from "../App";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

interface ExpensesProps {
  expenses: Expense[];
}

export default function Expenses(expenses: ExpensesProps) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses.expenses[0].title}
        amount={expenses.expenses[0].amount}
        id={expenses.expenses[0].id}
        date={expenses.expenses[0].date}
      />
      <ExpenseItem
        title={expenses.expenses[1].title}
        amount={expenses.expenses[1].amount}
        id={expenses.expenses[1].id}
        date={expenses.expenses[1].date}
      />
      <ExpenseItem
        title={expenses.expenses[2].title}
        amount={expenses.expenses[2].amount}
        id={expenses.expenses[2].id}
        date={expenses.expenses[2].date}
      />
      <ExpenseItem
        title={expenses.expenses[3].title}
        amount={expenses.expenses[3].amount}
        id={expenses.expenses[3].id}
        date={expenses.expenses[3].date}
      />
    </Card>
  );
}
