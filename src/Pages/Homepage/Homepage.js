import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { append } from "../../Features/BookmarkList/BookmarkListSlice";
import axios from "axios";
import Card from "../../Components/Card/Card";

function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      const res = await axios({
        method: "get",
        url: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants",
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      });
      setLoading(false);
      setData(res.data.records);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="pb-10">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="my-10 text-center text-4xl text-white">Available restaurants</h1>
          <div className="flex justify-center flex-wrap gap-x-5 gap-y-5">
          {data.map((item) => {
            return (
              <Card item={item} key={item.id} />
            );
          })}
            </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
