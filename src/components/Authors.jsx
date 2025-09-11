import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";

// #outside
// const Authors = () => {
//   const url = "https://example-data.draftbit.com/authors?_limit=10"; // can be inside or #outside
//   const [isLoading, setIsLoading] = useState(true);
//   const [authors, setAuthors] = useState([]);
//   const [isError, setIsError] = useState(false);

//   const getAuthors = async () => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data); // to check if the fetched data is in the console

//       setAuthors(data);
//       setIsLoading(false);
//     } catch (error) {
//       setIsError(true);
//       setIsLoading(false);
//     }
//   };

// using customized hook
const Authors = () => {
  const url = "https://example-data.draftbit.com/authors?_limit=10";
  const { isLoading, isError, authors } = useFetch(url);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div>
        <h1>Error Occured</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>List of Authors</h1>
      <div className="my-8 flex flex-col justify-center px-5 mx-4">
        {authors &&
          authors.map((author) => {
            return (
              <div key={author.id} className="">
                <h1>{author.person}</h1>
                <img
                  src={author.imgUrl}
                  alt=""
                  className="h-40 w-40 rounded-md"
                />

                <h1>{author.professions}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Authors;
