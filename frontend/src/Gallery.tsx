import React, { useEffect, useState } from "react";
import Card from "./Card.tsx";

interface BookProps {
  title: string;
  authors: string[];
  pageCount: number | string;
  image: string;
}

function Gallery() {
  const [books, setBooks] = useState<BookProps[]>([]);

  const fetchFromBackend = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/googleBooksApi/books"
      );
      if (!response.ok)
        throw new Error(`HTTP Error! Status: ${response.status}`);

      const fetchedBooks: BookProps[] = await response.json();
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books from backend", error);
    }
  };

  useEffect(() => {
    fetchFromBackend();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {books.map((book, index) => (
          <Card
            key={index}
            title={book.title}
            author={`Author: ${book.authors.join(", ")}`}
            pages={book.pageCount}
            image={book.image}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default Gallery;
