import ExpensesFilter from "./ExpenseFilter";

import React, {useState} from "react";
import ExpensesList from "./ExpensesList";


function Expences(props) {
    const[filteredYear, setFilteredYear]=useState('2020');
    const onDateFilterChange=(date)=>
    {
        setFilteredYear(date);
    }
  return (
    <div className="expenses">
      <ExpensesFilter selectedDate={filteredYear} onFilterDateChange={onDateFilterChange}></ExpensesFilter>
      <ExpensesList expenses={props.expenses} filteredYear={filteredYear}/>
      
   
    </div>
  );
}
export default Expences;
