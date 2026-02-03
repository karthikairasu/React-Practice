import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "./useFetchData";
import { Container, Card, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { post, isLoading, error } = useFetchData(undefined, id);
  if (isLoading)
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );

  if (error)
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
        <Link to="/">
          <Button variant="secondary" className="mt-3">
            ← Back to Posts
          </Button>
        </Link>
      </Container>
    );

  if (!post)
    return (
      <Container className="mt-5">
        <Alert variant="warning">Post not found</Alert>
        <Link to="/">
          <Button variant="secondary" className="mt-3">
            ← Back to Posts
          </Button>
        </Link>
      </Container>
    );
  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Header>
          <h3>Post Details</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Post ID: {post.id} | User ID: {post.userId}
          </Card.Subtitle>
          <Card.Text>{post.body}</Card.Text>
          <Link to="/">
            <Button variant="primary">← Back to Posts</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostDetails;
