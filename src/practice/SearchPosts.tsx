import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import useFetchData from "./useFetchData";

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

  return (
    <>
      <Container>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Search Post"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {isLoading && <h3>Loading...</h3>}
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
                  <td className="text-truncate">{value.title}</td>
                  <td className="text-truncate">{value.body}</td>
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
