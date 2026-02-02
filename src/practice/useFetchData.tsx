import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useFetchData = (debouncingSearch: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const filterData = res.data.filter(
          (value: any) =>
            value.title
              .toLowerCase()
              .includes(debouncingSearch.toLowerCase()) ||
            value.id.toString().includes(String(debouncingSearch))
        );

        setPosts(filterData);
        setError(null);
      } catch {
        setError("Something went wrong while fetching data. Please try again");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [debouncingSearch]);
  return { posts, isLoading, error };
};

export default useFetchData;
