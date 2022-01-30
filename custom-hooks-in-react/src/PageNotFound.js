import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, []);
  return (
    <div>
      <b>
        Error, Page not Found! You will be redirected to the home page in about
        3 seconds.
      </b>
    </div>
  );
};

export default PageNotFound;
