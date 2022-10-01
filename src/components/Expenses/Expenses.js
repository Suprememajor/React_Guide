import { useState } from 'react';

import './Expenses.css'
import Card from '../UI/Card';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem data={props.data[0]}/>
            <ExpenseItem data={props.data[1]}/>
            <ExpenseItem data={props.data[2]}/>
            <ExpenseItem data={props.data[3]}/>
        </Card>
    )
}

export default Expenses;