import { useState, useEffect } from "react";

const useTodos = (userId: number, page: number, limit = 5) => {
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([]);
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
