import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const useFetchData = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setPosts(res.data);
        setError(null);
      } catch (err) {
        setError("Something went wrong while fetching data, Please try again");
      } finally {
        setIsLoading(isLoading);
      }
    };
    fetchData();
  }, []);
  return { posts, error, isLoading };
};

export default useFetchData;
