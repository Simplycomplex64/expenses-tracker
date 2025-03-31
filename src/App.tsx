import { useEffect, useRef, useState } from "react";
import ExpenseTracker from "./expense-tracker/components/expense-tracker";
import ExpenseFilter from "./expense-tracker/components/expense-filter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/components/categories";
import ProductList from "./connect-to-back-end/ProductList";
import axios, { AxiosError, CanceledError } from "axios";

interface Users {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  useEffect(() => {
    const constroller = new AbortController();
    setIsLoading(true);
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: constroller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => constroller.abort();
  }, []);
  // const [category, setcategory] = useState("");

  // const [selectedFilter, setSelectedFilter] = useState("");

  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "James", amount: 34, category: "Parent" },
  //   { id: 2, description: "Jake", amount: 8, category: "Child" },
  //   { id: 3, description: "Jane", amount: 2, category: "Child" },
  //   { id: 4, description: "Josh", amount: 6, category: "Child" },
  //   { id: 5, description: "Maya", amount: 40, category: "Guest" },
  // ]);

  // const visibleExpenses = selectedFilter
  //   ? expenses.filter((e) => e.category === selectedFilter)
  //   : expenses;

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
    // <>
    //   <div>
    //     <select
    //       className="form-select"
    //       onChange={(event) => setcategory(event?.target.value)}
    //     >
    //       <option value=""></option>
    //       <option value="Clothing">Clothing</option>
    //       <option value="Household">Household</option>
    //     </select>
    //     <ProductList category={category} />
    //   </div>
    // </>

    // <div>
    //   <div className="mb-5">
    //     <ExpenseForm
    //       onSubmit={(expense) =>
    //         setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
    //       }
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <ExpenseFilter
    //       onSelectCategory={(category) => setSelectedFilter(category)}
    //     />
    //   </div>
    //   <ExpenseTracker
    //     expenses={visibleExpenses}
    //     onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    //   />
    // </div>
  );
};

export default App;
