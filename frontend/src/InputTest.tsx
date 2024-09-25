import React, { useState } from "react";

interface InputProps {
  prompt1: string;
  prompt2: string;
}

function InputTest({ prompt1, prompt2 }: InputProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBook = { title, author };

    try {
      const response = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        const addedBook = await response.json();
        console.log("Book added:", addedBook);
        setTitle("");
        setAuthor("");
      } else {
        console.error("Failed to add book:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {prompt1}
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            aria-describedby="emailHelp"
            onChange={(e) => setTitle(e.target.value)}
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
            type="text"
            className="form-control"
            value={author}
            id="exampleInputPassword1"
            onChange={(e) => setAuthor(e.target.value)}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default InputTest;
