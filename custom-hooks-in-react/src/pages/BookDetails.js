import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  //   let params = useParams();
  //   return <div>Book Details --> {params.id}</div>;

  const { id, author } = useParams();
  return (
    <div>
      Book Details <br /> Book id: {id} <br /> Book Author: {author}
    </div>
  );
};

export default BookDetails;
