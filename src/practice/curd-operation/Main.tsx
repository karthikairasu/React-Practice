import React from "react";
import useFetchData from "./useFetchData";

const Main = () => {
  const { posts, error, isLoading } = useFetchData();
  return (
    <>
      <h3>Template</h3>
    </>
  );
};

export default Main;
