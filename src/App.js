import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Homepage from "./Pages/Homepage/Homepage";
import NoMatch from "./Pages/NoMatch/NoMatch";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Navbar />

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
