import ExpensesTrackerHeader from "./components/ETheader folder/expenses-tracker-header";
import FormSection from "./components/mainSection/FormSection";
import GridSection from "./components/grid/gridSection";

const App = () => {
  return (
    <>
      <div>
        <ExpensesTrackerHeader />
      </div>
      <FormSection />
      <GridSection />
    </>
  );
};

export default App;
