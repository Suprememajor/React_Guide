import { useState } from 'react';

import './Expenses.css'
import Card from '../UI/Card';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    console.log(props.data);

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.data.map(expense => <ExpenseItem data={expense} />)}
        </Card>
    )
}

export default Expenses;