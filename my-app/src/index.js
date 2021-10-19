import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import { books } from "./books";
import Book from "./Book";

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

ReactDom.render(<BookList />, document.getElementById("root"));

//Fix for hot reloading
if (module.hot) {
  module.hot.accept();
}
