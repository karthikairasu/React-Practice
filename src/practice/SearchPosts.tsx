import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";

const SearchPosts = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        {isLoading && <h3>Loading...</h3>}
        <Table></Table>
      </Container>
    </>
  );
};

export default SearchPosts;
