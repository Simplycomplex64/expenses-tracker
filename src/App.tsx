import { useState } from "react";
import ExpenseTracker from "./expense-tracker/components/expense-tracker";
import ExpenseFilter from "./expense-tracker/components/expense-filter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const categories = ["Parent", "Child", "Guest"];
const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "James", amount: 34, category: "Parent" },
    { id: 2, description: "Jake", amount: 8, category: "Child" },
    { id: 3, description: "Jane", amount: 2, category: "Child" },
    { id: 4, description: "Josh", amount: 6, category: "Child" },
    { id: 5, description: "Maya", amount: 40, category: "Guest" },
  ]);

  const visibleExpenses = selectedFilter
    ? expenses.filter((e) => e.category === selectedFilter)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedFilter(category)}
        />
      </div>
      <ExpenseTracker
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
