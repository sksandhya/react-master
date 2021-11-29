import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

 const[isEditing, setIsEditing] = useState(false);
 const saveExpenseDataHandler = (enteredExpenseData) =>{
     const expenseData = {
         ...enteredExpenseData,
         id:Math.random().toString()
     };
     console.log(expenseData);
     props.onAddExpense(expenseData); // moving data from child to parent
     setIsEditing(false);
 }

 const startEdidtingHandler = () =>{
  setIsEditing(true);
 }
 const stopEditingHandler = () =>{
  setIsEditing(false);
 }
  return (
    
    <div className="new-expense">
      {!isEditing && <button onClick = {startEdidtingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpensedata = {saveExpenseDataHandler}/>}
    </div>
  );
};

export default NewExpense;
