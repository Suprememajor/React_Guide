import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate data={props.data.date}/>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
