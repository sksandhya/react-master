import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) =>{

   // let expensesContent = <p>No Expense Found</p>;
    

    if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }

    return(
      <ul className="expenses-list">
        <h2 className="expenses-list__fallback">Expenses found</h2>
        {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
      </ul>

    );

}

export default ExpenseList;