import React from "react";
import ReactDom from "react-dom";

//Styling
import "./index.css";
// setup vars
const firstBook = {
  author: "Ann Whitford Paul",
  title: "If Animals Kissed Good Night",
  img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
};
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="book img" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

//Fix for hot reloading
if (module.hot) {
  module.hot.accept();
}
