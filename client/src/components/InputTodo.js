
import React, { useState} from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:8787/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
             window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <>
            <h1 className="text-center my-5">Input New Todo</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="text"
                    placeholder="add todo"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <button className="btn btn-success">Add</button>
            </form>
        </>


    );

}

export default InputTodo;