import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { append } from "../../Features/BookmarkList/BookmarkListSlice";
import axios from "axios";
import MapModal from "../../Components/MapModal/MapModal";

function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
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
                <button
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Click here
                </button>
                <MapModal open={openModal} setOpen={setOpenModal} mapUrl={``}/>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    count.find((i) => i.id === item.id)
                      ? alert("Already added")
                      : dispatch(append(item)) && alert("Added");
                  }}
                >
                  {count.find((i) => i.id === item.id) ? (
                    <div>Bookmarked</div>
                  ) : (
                    <div>Bookmark</div>
                  )}
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
