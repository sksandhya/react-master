import ExpenseItem from "./ExpenseItem";
import  "./Expenses.css";
import Card from "../UI/Card";

function Expenses(expenses){

  
  return(<Card className="expenses">
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
  );

}

export default Expenses;