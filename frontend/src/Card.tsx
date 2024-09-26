import styled from "styled-components";

interface CardProps {
  title: string;
  text: string;
  image: string;
}

function Card({ title, text, image }: CardProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBook = { title, text, image };

    try {
      const response = await fetch("http://localhost:3000/mongodb/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        const addedBook = await response.json();
        console.log("Book added:", addedBook);
      } else {
        console.error("Failed to add book:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-primary">Add to library</button>
        </div>
      </div>
    </>
  );
}

export default Card;
