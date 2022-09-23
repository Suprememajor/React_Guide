import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.data.date.toLocaleString('en-US', {month: 'long'});
  const day = props.data.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.data.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
