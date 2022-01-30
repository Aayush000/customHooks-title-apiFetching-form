import React from "react";
import useTitle from "../hooks/useTitle";
import useFetch from "../hooks/useFetch";

const Aboutus = () => {
  useTitle("About us");
  const [isLoading, fetchedData, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/",
    { method: "GET" }
  );

  return (
    <div>
      {isLoading
        ? "Loading..."
        : fetchedData.length > 0
        ? fetchedData.map((todo, index) => {
            return <div key={index}>{todo.title}</div>; // should have unique key for unique item
          })
        : null}

      <br />

      {error && JSON.stringify(error.message)}
    </div>
  );
};

export default Aboutus;

// https://jsonplaceholder.typicode.com/
// can get fake rest api -- dummy data
