import React from "react";

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  //attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello world");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log("HOVER");
      }}
    >
      <img src={img} alt="book img" />
      <h1>{title}</h1> {/* props.title */}
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        ref ex
      </button>
      {/* {children} props.children */}
    </article>
  );
};

export default Book;
