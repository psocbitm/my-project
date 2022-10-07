import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Homepage from "./Pages/Homepage/Homepage";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Login from "./Pages/Login/Login";
import Layout from "./Components/Layout/Layout";
export default function App() {
  const count = useSelector((state) => state.BookmarkList.bookmarks);

  React.useEffect(() => {
    Cookies.set("Bookmarks", JSON.stringify(count));
  }, [count]);

  return (
    <div className="bg-ink min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

