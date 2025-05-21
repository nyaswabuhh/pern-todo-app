
import React, {Fragment, useEffect ,useState}from "react";

const ListTodos = ()=>{

    const [todos, setTodos]=useState([]);

    async function getTodos(){
    
        const res = await fetch("http://localhost:8787/todos");

        const todoArray= await res.json();

        setTodos(todoArray);
    }

    useEffect(()=>
    {
        getTodos();
    },[]);

    console.log(todos)

    return(
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


      { todos.map(todo =>(
        <tr>
            <td>{todo.description}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
      ))

      }
      
    </tbody>
  </table>
        </>
    );
}
export default ListTodos