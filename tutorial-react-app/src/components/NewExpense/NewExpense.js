import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NewExpenseButton from "./NewExpenseButton";

const NewExpense = (props) => {
  const[showExpForm, setShowExpForm]=useState('false');
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  if(showExpForm === 'true') 
  {
    return (
      <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShowExp={setShowExpForm} />
    </div>)
  }
  else{
  return (
    <div className="new-expense">
      <NewExpenseButton setShowExp={setShowExpForm}/>
    </div>
  );
  }
};

export default NewExpense;
