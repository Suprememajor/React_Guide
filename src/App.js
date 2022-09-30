import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "Car Insurance 1",
      amount: 294.67,
      date: new Date(2022, 9, 20),
    },
    {
      title: "Car Insurance 2",
      amount: 294.67,
      date: new Date(2022, 9, 20),
    },
    {
      title: "Car Insurance 3",
      amount: 294.67,
      date: new Date(2022, 9, 20),
    },
    {
      title: "Car Insurance 4",
      amount: 294.67,
      date: new Date(2022, 9, 20),
    },
  ];
  return (
    <div className="App">
      <NewExpense />
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
