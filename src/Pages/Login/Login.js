import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Features/Auth/AuthSlice";
import axios from 'axios';
function Login() {
  const [loading, setLoading] = useState(true);
  async function getUser() {
    try {
      const res = await axios({
        method: "get",
        url: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      });
      setLoading(false);
      console.log(res.data.records);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const count = useSelector((state) => state.BookmarkList.bookmarks);
  const dispatch = useDispatch();
  return <div>Login</div>;
}

export default Login;
