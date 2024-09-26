import styled from "styled-components";

interface CardProps {
  title: string;
  author: string;
  pages: string | number;
  image: string;
}

function Card({ title, author, pages, image }: CardProps) {
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newBook = { title, author, pages, image };

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
        <img
          src={image}
          style={{ verticalAlign: "middle" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <p className="card-text">Pages: {pages}</p>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add to library
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
