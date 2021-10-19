import React from "react";
import ReactDom from "react-dom";

//Styling
import "./index.css";
// setup vars - list
const books = [
  {
    id: 1,
    author: "Ann Whitford Paul",
    title: "If Animals Kissed Good Night",
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    author: "It Ends with Us: A Novel",
    title: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    author: "Little Blue Truck's Halloween",
    title: "Alice Schertle",
    img: "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//getting props
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

ReactDom.render(<BookList />, document.getElementById("root"));

//Fix for hot reloading
if (module.hot) {
  module.hot.accept();
}
