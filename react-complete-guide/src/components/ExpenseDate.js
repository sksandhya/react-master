import "./ExpenseDate.css";
function ExpenseDate(props){

    const month = props.exdate.toLocaleString("en-US", { month: "long" });
    const day = props.exdate.toLocaleString("en-US", { day: "2-digit" });
    const year = props.exdate.getFullYear();

    return(
    <div className="expense-date"> 
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
    );
}

export default ExpenseDate;