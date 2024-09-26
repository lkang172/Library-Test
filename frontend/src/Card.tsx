import styled from "styled-components";

interface CardProps {
  title: string;
  text: string;
  image: string;
}

function Card({ title, text, image }: CardProps) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            Add to library
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
