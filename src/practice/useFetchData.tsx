import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useFetchData = (search?: string, id?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          setPost(res.data);
        } else {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );

          const filterData = search
            ? res.data.filter(
                (value: Post) =>
                  value.title.toLowerCase().includes(search.toLowerCase()) ||
                  value.id.toString().includes(String(search))
              )
            : res.data;

          setPosts(filterData);
        }

        setError(null);
      } catch {
        setError("Something went wrong while fetching data. Please try again");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [search, id]);
  return { posts, post, isLoading, error };
};

export default useFetchData;
