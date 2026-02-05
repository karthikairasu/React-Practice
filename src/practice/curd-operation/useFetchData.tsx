import React, {useState} from "react";

const useFetchData = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
};

export default useFetchData;
