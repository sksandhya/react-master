import "./ExpenseItem.css";

function ExpenseItem(props) {
  //const expenseDate = new Date(2021,11,27);
  //const carInsurance = 'Car Insurance';
  //const exxpenseAmount = 250;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
