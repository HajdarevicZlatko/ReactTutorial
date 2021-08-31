import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /*const [enteredTitle, setEnteredTitle]= useState('');
const [enteredAmount, setEnteredAmount]= useState('');
const [enteredDate, setEnteredDate]= useState('');
const titleChangeHandler = (event)=>
{
    setEnteredTitle(event.target.value);
};

const amountChangeHandler = (event)=>
{
    setEnteredAmount(event.target.value);
};

const dateChangeHandler = (event)=>
{
    setEnteredDate(event.target.value);
};
/*Second approach */
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, enteredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    /*
        Calling function on parent form
    */
    props.onSaveExpenseData(expenseData);
    setUserInput((prevState) => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="1.0"
            step="1.0"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
