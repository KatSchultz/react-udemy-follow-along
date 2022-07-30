import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

interface ExpenseItemProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export default function ExpenseItem(props: ExpenseItemProps) {
  const month = props.date.toLocaleString("en-US", { month: "long" });

  const day = props.date.toLocaleString("en-US", { day: "numeric" });

  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
