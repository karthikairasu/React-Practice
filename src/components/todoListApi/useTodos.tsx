import { useState, useEffect } from "react";

const useTodos = (userId, page, limit = 5) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}&userId=${userId}`
        );
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [userId, page, limit]);

  return { todos, loading };
};

export default useTodos;
