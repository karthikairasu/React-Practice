import React, { useState, useEffect } from "react";
import { Table, Container, Spinner } from "react-bootstrap";
import useFetchData from "./useFetchData";
import { Link } from "react-router-dom";

const SearchPosts = () => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncingSearch, setDebouncingSearch] = useState(searchInput);
  const { posts, isLoading, error } = useFetchData(debouncingSearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncingSearch(searchInput);
      console.log(searchInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // 👉 Initial full-page loading
  if (isLoading && posts.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <Container>
        <div>
          <input
            type="text"
            className="form-control my-2"
            placeholder="Search Post"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {/* 👉 Searching loader (small + non-intrusive) */}
          {isLoading && posts.length > 0 && (
            <div
              className="text-center my-2"
              style={{ position: "absolute", right: "70px", top: "5px" }}
            >
              <Spinner animation="grow" size="sm" /> Searching
            </div>
          )}
        </div>
        {error && <h3 className="text-danger">{error}</h3>}
        <Table bordered striped variant="dark">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((value) => (
                <tr key={value.id}>
                  <td>{value.userId}</td>
                  <td>{value.id}</td>
                  <td className="">
                    <Link
                      to={`/postDetails/${value.id}`}
                      style={{ color: "#fff" }}
                    >
                      {value.title}
                    </Link>
                  </td>
                  <td className="">{value.body}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No Records</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default SearchPosts;
