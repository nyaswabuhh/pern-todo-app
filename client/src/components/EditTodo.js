import React, { Fragment, useEffect, useState } from "react"

const EditToDo = ({ todo }) => {
  const EditText = async (id) => {

    try {

      const body = {description}; 

      const res = await fetch(`http://localhost:8787/todos/${id}`,{
         method:"PUT",
         headers:{"Content-Type":"application/json"},
         body: JSON.stringify(body)
      }
       
      );
      
      window.location = "/";
    } catch (err) {
      console.error(err.message)

    }

  }

  const [description, setDescription] = useState(todo.description)

  console.log(todo);
  return (
    <>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
        Edit
      </button>


      <div class="modal" id={`id${todo.todo_id}`} onClick={()=>setDescription(todo.description)}>
        <div class="modal-dialog">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
              onClick={()=>setDescription(todo.description)}
              ></button>
            </div>


            <div class="modal-body">
              <input type="text" className="form-control" 
              value={description}
              onChange={e=>setDescription(e.target.value)} />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={() => EditText(todo.todo_id)}>Edit</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button>
            </div>

          </div>
        </div>
      </div>


      <div class="modal fade"></div>


      <div class="modal"></div>

    </>
  );
}
export default EditToDo;