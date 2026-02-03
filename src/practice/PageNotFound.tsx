import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <style>{``}</style>
      <Row>
        <Col className="text-center">
          <h1 className="display-1 text-danger">404</h1>
          <h3 className="mb-3">Oops! Page Not Found</h3>

          <Link to="/">
            <Button variant="primary" className="mt-4">
              ← Back to Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
