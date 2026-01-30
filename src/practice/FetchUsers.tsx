import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

const FetchUsers = () => {
  interface user {
    id: number;
    name: string;
    email: string;
    address: { street: string };
  }
  const [data, setData] = useState<user[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        setError(null);
      } catch (err: any) {
        console.log("Api data fetch error", err);
        setError("Failed to load users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <h2>User List</h2>
      {loading && <h3>Loading...</h3>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <Table bordered responsive hover striped variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
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
  );
};

export default FetchUsers;
