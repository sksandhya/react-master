import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import  "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(expenses){
const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  
  return(
  <div>   
  <Card className="expenses">
  <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
    <ExpenseItem
    title={expenses.item[0].title}
    amount={expenses.item[0].amount}
    date={expenses.item[0].date}
  ></ExpenseItem>
  <ExpenseItem
    title={expenses.item[1].title}
    amount={expenses.item[1].amount}
    date={expenses.item[1].date}
  ></ExpenseItem>
  <ExpenseItem
    title={expenses.item[2].title}
    amount={expenses.item[2].amount}
    date={expenses.item[2].date}
  ></ExpenseItem>
  </Card>
  </div>
  );
  

}

export default Expenses;