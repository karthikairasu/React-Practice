import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

const SearchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [debouncingSearch, setDebouncingSearch] = useState(searchInput);

  const filterData = posts.filter((value, index) =>
    value.toLowerCase().includes(searchInput.toLowerCase())
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncingSearch(searchInput);
      return () => clearTimeout(timer);
    }, 500);
  }, [searchInput]);

  useEffect(() => {
    if (debouncingSearch) {
    }
  }, [debouncingSearch]);

  return (
    <>
      <Container>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Search Post"
        />
        {isLoading && <h3>Loading...</h3>}
        <Table></Table>
      </Container>
    </>
  );
};

export default SearchPosts;
