import TodosHeader from "./components/TodosHeader";
import TodosForm from "./components/TodosForm";
import TodoItems from "./components/TodoItems";
import TodosFooter from "./components/TodosFooter";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader />
            <TodosForm />
            <TodoItems />
            <TodosFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
