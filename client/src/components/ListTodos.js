
import React, { Fragment, useEffect, useState } from "react";
import EditToDo from "./EditTodo";

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  async function deleteTodos(id){
    try {
      const res = await fetch(`http://localhost:8787/todos/${id}`,{
        method:"DELETE"
      });
      setTodos(todos.filter(todo =>todo.todo_id !== id));
      
    } catch (err) {
      console.error(err.message)
      
    }

  }

  async function getTodos() {

    const res = await fetch("http://localhost:8787/todos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos)

  return (
    <>
      <table class="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}


          {todos.map(todo => (
            <tr>
              <td>{todo.description}</td>
              <td>{< EditToDo  todo={todo}/>}</td>
              <td>
               <button className="btn btn-danger" onClick={() => deleteTodos(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))

          }

        </tbody>
      </table>
    </>
  );
}
export default ListTodos