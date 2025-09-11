import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";

const url = "https://example-data.draftbit.com/books?_limit=10";

const Books = () => {
  const { isLoading, isError, results: books } = useFetch(url);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error occured</h1>;
  }
  return (
    <div>
      <h1>FAVOURITE BOOKS TO READ</h1>
      <div className="grid md:grid-cols-4 mx-auto items-center gap-3">
        {books &&
          books.map((book) => {
            const { id, image_url, title, authors, rating } = book;
            return (
              <div key={id}>
                <img src={image_url} alt={title} className="h-[300px] " />
                <h1>{title}</h1>
                <p>Written by: {authors}</p>
                <p>{rating}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Books;
