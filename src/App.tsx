import { lazy, Suspense } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import RealTime from "./components/TimeComponent";
import StartStopCount from "./components/StartStopCountComponent";
import StopWatchComponet from "./components/StopWatchComponent";
import TodosList from "./components/todoListApi/TodoList";
import FetchUsers from "./practice/FetchUsers";

const SearchPosts = lazy(() => import("./practice/SearchPosts"));
const PostDetails = lazy(() => import("./practice/PostDetails"));
const PageNotFound = lazy(() => import("./practice/PageNotFound"));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<SearchPosts />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
      </Routes>
    </Suspense>
  );
}
