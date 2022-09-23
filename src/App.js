import "./App.css";
import Expenses from "./components/Expenses";

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
      <h2>Let's get started!</h2>
      <p>This is also visible.</p>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
