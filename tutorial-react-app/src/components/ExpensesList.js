import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = props => {
        
            if(props.expenses.filter(item=>item.date.getFullYear()===parseInt(props.filteredYear)).length===0)
            {
                return (<h2 className="expenses_list__fallback">Found no expences</h2>)

            }
            return (
                <ul className="expenses-list">
                    {
                    props.expenses.filter(item=>item.date.getFullYear()===parseInt(props.filteredYear)).map(item => 
                    <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    />
                    )}
                 
                </ul> 
            );
                    }

export default ExpensesList;