import React, { useState, useRef } from "react";
import useTodos from "./useTodos";
import { Button } from "react-bootstrap";

export default function App() {
  const [userId, setUserId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const selectRef = useRef<HTMLSelectElement>(null);

  const itemsPerPage = 5;

  const { todos, loading } = useTodos(
    Number(userId),
    currentPage,
    itemsPerPage
  );

  const handleSearch = () => {
    setCurrentPage(1);
    setUserId(selectRef.current!.value);
  };

  return (
    <div className="container mt-3" style={{ padding: "10px" }}>
      <select ref={selectRef} className="form-control w-50 d-inline">
        <option value="">Choose User</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <Button className="ms-2" variant="primary" onClick={handleSearch}>
        Search
      </Button>

      {loading && <p>Loading...</p>}

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                No Records Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {userId && (
        <div className="d-flex gap-2">
          <button
            className="btn btn-secondary"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <span className="align-self-center">Page {currentPage}</span>

          <button
            className="btn btn-secondary"
            disabled={todos.length === 0}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
