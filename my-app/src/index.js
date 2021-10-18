import React from "react";
import ReactDom from "react-dom";

//Styling
import "./index.css";
// setup vars - list
const books = [
  {
    author: "Ann Whitford Paul",
    title: "If Animals Kissed Good Night",
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
  },
  {
    author: "It Ends with Us: A Novel",
    title: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL200_SR200,200_.jpg",
  },
];
const names = ["Mario", "Nemanja", "Dragan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
function BookList() {
  return (
    <section className="booklist">
      {newNames}
      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      /> */}
    </section>
  );
}

//gettings props
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="book img" />
      <h1>{title}</h1> {/* props.title */}
      <h4>{author}</h4>
      {/* {children} props.children */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

//Fix for hot reloading
if (module.hot) {
  module.hot.accept();
}
