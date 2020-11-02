import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import "./index.css";

function App(props) {
  console.log('props: ', props)
  const [todoInput, setTodoInput] = useState("");

  function handleTodoInput(e) {
    setTodoInput(e.target.value);
  }

  function handleAddTodo() {
    props.dispatch(actions.addTodo(todoInput));
    setTodoInput("");
  }

  function handleDelete(e) {
    props.dispatch(actions.deleteTodo(e.target.id));
  }

  function handleMarkCompleted(e) {
    props.dispatch(actions.markTodoCompleted(e.target.id));
  }

  return (
    <div className="App">
      <h1>TODOs</h1>
      <input type="text" value={todoInput} onChange={handleTodoInput} />
      <button onClick={handleAddTodo}>Add</button>

      {props.todos.map((todo) => {
        return (
          <li key={todo.id} className={todo.completed ? "strikethrough" : ""}>
            {todo.description}

            <button id={todo.id} onClick={handleDelete}>
              Delete
            </button>

            <button
              id={todo.id}
              onClick={handleMarkCompleted}
              disabled={todo.completed}
            >
              Mark Completed
            </button>
          </li>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

export default connect(mapStateToProps)(App);
