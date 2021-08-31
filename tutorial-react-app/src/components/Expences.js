import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import React, {useState} from "react";
function Expences(props) {
    const[filteredYear, setFilteredYear]=useState('2020');
    const onDateFilterChange=(date)=>
    {
        setFilteredYear(date);
    }
  return (
    <div className="expenses">
      <ExpensesFilter selectedDate={filteredYear} onFilterDateChange={onDateFilterChange}></ExpensesFilter>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}
export default Expences;
