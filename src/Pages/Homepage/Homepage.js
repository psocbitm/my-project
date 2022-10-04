import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  append,
} from "../../Features/BookmarkList/BookmarkListSlice";
import axios from "axios";

function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      const res = await axios({
        method: "get",
        url: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=3&view=Grid%20view",
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

  const count = useSelector((state) => state.BookmarkList.bookmarks);
  const dispatch = useDispatch();
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Available restaurants</h1>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.fields.Name}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    alert("Added to bookmarks");
                    dispatch(append([item]));
                  }}
                >
                  add to bookmark
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Homepage;
