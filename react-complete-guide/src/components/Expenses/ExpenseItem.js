import React ,{useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title,setTtile] = useState(props.title);
  
  const clickHandler = () =>{
    setTtile("Updated");
    console.log("clicked!!");
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate exdate ={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>Add Expenses</button>
    </Card>
  );
}

export default ExpenseItem;
