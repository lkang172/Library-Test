import React from "react";

interface GridProps {
  children: React.ReactNode;
}

function Grid(props: GridProps) {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {React.Children.map(props.children, (child) => (
            <div className="col mb-4 mt-4">{child}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;
