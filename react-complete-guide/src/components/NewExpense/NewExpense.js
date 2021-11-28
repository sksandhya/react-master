import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

 const saveExpenseDataHandler = (enteredExpenseData) =>{
     const expenseData = {
         ...enteredExpenseData,
         id:Math.random().toString()
     };
     console.log(expenseData);
     props.onAddExpense(expenseData); // moving data from child to parent
 }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensedata = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
