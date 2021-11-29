import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /* first approach */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Second approach
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // first approach
    //console.log(event.target.value);

    //   setUserInput({       // second approach
    //       ...userInput,
    //       enteredTitle:event.target.value,
    //   });

    //Third Approach
    // setUserInput( (prevState) => {
    //     return {...prevState, enteredTitle:event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
      event.preventDefault();

      const ExpenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
      };
      //console.log(ExpenseData);
      props.onSaveExpensedata(ExpenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value = {enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount} onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-28-03"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="ew-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
