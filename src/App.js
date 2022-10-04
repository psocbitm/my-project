import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Homepage from "./Pages/Homepage/Homepage";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Login from "./Pages/Login/Login";

export default function App() {
  const count = useSelector((state) => state.BookmarkList.bookmarks);

  React.useEffect(() => {
    Cookies.set("Bookmarks", JSON.stringify(count));
  }, [count]);

  return (
    <div>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
