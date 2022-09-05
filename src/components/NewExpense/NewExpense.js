import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const cancelHandler = (passedData) => {
    console.log(passedData)
    setIsEditing(false)
  };  
 
  //<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  
  const changeContent = () => {
    setIsEditing(true)
  };


  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={changeContent}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
     
    </div>
  );
};

export default NewExpense;
