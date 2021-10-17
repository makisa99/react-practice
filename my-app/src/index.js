import React from "react";
import ReactDom from "react-dom";

//Styling
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg"
    alt="img"
  />
);

const Title = () => <h1>If Animals Kissed Good Night</h1>;
const Author = () => <h4>Ann Whitford Paul</h4>;
ReactDom.render(<BookList />, document.getElementById("root"));

//Fix for hot reloading
if (module.hot) {
  module.hot.accept();
}
