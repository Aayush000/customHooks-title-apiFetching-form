// Custom hook to create title for various pages.

import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    //componentDidMount..
    document.title = `${title} | Website`;
  });

  return null;
};

export default useTitle;
