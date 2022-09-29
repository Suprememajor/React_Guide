import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.data.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log("Clicked");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate data={props.data.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
