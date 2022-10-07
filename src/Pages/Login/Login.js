import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Features/Auth/AuthSlice";
import Cookies from "js-cookie";
import axios from "axios";
function Login() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fields, setFeilds] = useState({
    username: "",
    password: "",
  });
  const loggedIn = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  //get a list of all valid users.
  async function getUser() {
    try {
      const res = await axios({
        method: "get",
        url: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals",
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      });
      setUsers(res.data.records);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function loginUser() {
    const user = users.find(
      (user) =>
        user.fields.username === fields.username &&
        user.fields.password === fields.password
    );
    if (user) {
      console.log(user);
      dispatch(login(user));
    } else {
      alert("Wrong username or password");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {loggedIn ? (
        <div className="text-center text-white text-3xl ">
          <h1 className="my-7">Welcome {loggedIn.fields.username}</h1>
          <button
            className="hover:text-white/50"
            onClick={() => {
              Cookies.remove("Bookmarks");
              Cookies.remove("user");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center ">
          <div className="w-full max-w-xs relative -top-32">
            <h1 className="text-4xl text-white text-center my-5">Login</h1>
            <form className=" bg-black/25 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg ">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Username"
                  value={fields.username}
                  onChange={(e) => {
                    setFeilds({ ...fields, username: e.target.value });
                  }}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Password"
                  value={fields.password}
                  onChange={(e) => {
                    setFeilds({ ...fields, password: e.target.value });
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    loginUser();
                  }}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
