import './Expenses.css'
import Card from './Card';

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return(
        <Card className="expenses">
            <ExpenseItem data={props.data[0]}/>
            <ExpenseItem data={props.data[1]}/>
            <ExpenseItem data={props.data[2]}/>
            <ExpenseItem data={props.data[3]}/>
        </Card>
    )
}

export default Expenses;