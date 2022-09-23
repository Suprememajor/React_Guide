function ExpenseDate(props) {
    const month = props.data.toLocaleString('en-US', {month: 'long'});
    const day = props.data.toLocaleString('en-US', {day: '2-digit'});
    const year = props.data.getFullYear();

    return (
        <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
    );
}

export default ExpenseDate;