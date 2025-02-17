import { useState } from "react";
import ExpenseTracker from "./expense-tracker/components/expense-tracker";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "James", amount: 34, category: "Parent" },
    { id: 2, description: "Jake", amount: 8, category: "Child" },
    { id: 3, description: "Jane", amount: 2, category: "Child" },
    { id: 4, description: "Josh", amount: 6, category: "Child" },
  ]);

  return (
    <>
      <ExpenseTracker
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;
