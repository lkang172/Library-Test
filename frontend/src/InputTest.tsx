import React, { useState } from "react";
import axios from "axios";

interface InputProps {
  prompt1: string;
  prompt2: string;
}

function InputTest({ prompt1, prompt2 }: InputProps) {
  const [task, setTask] = useState("");
  const addTask = () => {
    axios
      .post("http://localhost:5173/?", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {prompt1}
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setTask(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            {prompt2}
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 htmlForm-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={addTask}>
          Submit
        </button>
      </form>
    </>
  );
}

export default InputTest;
