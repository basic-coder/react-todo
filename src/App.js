import { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.getItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title) => {
    let srno;

    if (todos.length === 0) {
      srno = 0;
    } else {
      srno = todos[todos.length - 1].srno + 1;
    }
    const myTodo = {
      srno: srno,
      title: title,
    };
    setTodos([...todos, myTodo]);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todo List" />
        <Switch>
          <Route exact path="/" render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              ); }}></Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
