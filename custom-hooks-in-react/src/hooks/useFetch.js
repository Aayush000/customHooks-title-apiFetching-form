// Custom hook for fetching data from different APIs

import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, { method }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let p;
  switch (method) {
    case "GET":
      p = axios.get(url);
      break;
    case "POST":
      p = axios.post(url);
      break;
    case "DELETE":
      p = axios.delete(url);
      break;
    default:
      p = axios.get(url);
  }

  useEffect(() => {
    p.then((response) => {
      setFetchedData(response.data);
      setIsLoading(false);
    }).catch((err) => setError(err));
  }, []);

  return [isLoading, fetchedData, error];
};

export default useFetch;
