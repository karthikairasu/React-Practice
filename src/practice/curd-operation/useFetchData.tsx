import React, { useState, useEffect } from "react";

const useFetchData = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = fetch('');
        const data = res.json();
        setPosts(data);
      }
    };
  }, []);
};

export default useFetchData;
