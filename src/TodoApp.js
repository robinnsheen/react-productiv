import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  /** add a new todo to list */
  //TODO: change all methods to callbackpattern
  function create(newTodo) {

    setTodos([...todos, { ...newTodo, id: uuid() }]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    //do we spread the todo or just set the todo to the updatedTodo
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }



  if (todos.length > 0) {
    return (
      <main className="TodoApp">
        <div className="row">
          <div className="col-md-6">
            <EditableTodoList todos={todos} update={update} remove={remove} />
          </div>
          <div className="col-md-6">
            {todos.length > 0
              ? <section className="mb-4">
                <h3>Top Todo</h3>
                <TopTodo todos={todos} />
              </section>
              : null}
            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm
                handleSave={create}
                initialFormData={{ title: "", description: "", priority: 1 }} />
            </section>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <section>
        <span className="text-muted">You have no todos.</span>
        <h3 className="mb-3">Add Nü</h3>
        <TodoForm
          handleSave={create}
          initialFormData={{ title: "", description: "", priority: 1 }} />
      </section>
    );
  }
  ;
}

export default TodoApp;
