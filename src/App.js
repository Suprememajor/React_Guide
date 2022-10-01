import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 'e1',
    title: "Grocery shopping",
    amount: 2950,
    date: new Date(2019, 9, 25),
  },
  {
    id: 'e2',
    title: "School fees",
    amount: 25000,
    date: new Date(2021, 5, 13),
  },
  {
    id: 'e3',
    title: "Data",
    amount: 10000,
    date: new Date(2022, 10, 1),
  },
  {
    id: 'e4',
    title: "House rents",
    amount: 249000,
    date: new Date(2022, 9, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/> 
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
