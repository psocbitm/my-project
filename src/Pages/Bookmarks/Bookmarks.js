import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emptyList,
  remove,
} from "../../Features/BookmarkList/BookmarkListSlice";
function Bookmarks() {
  const count = useSelector((state) => state.BookmarkList.bookmarks);
  const dispatch = useDispatch();

  return (
    <div>
      {count.length === 0 ? (
        <div>
          <h1>Bookmarks</h1>
          <div>No bookmarks yet</div>
        </div>
      ) : (
        <div>
          <h1>Bookmarks</h1>
          <div
            className="cursor-pointer"
            onClick={() => {
              alert("Bookmarks cleared");
              dispatch(emptyList());
            }}
          >
            clear bookmarks
          </div>
          {count.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.fields.Name}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    alert("Bookmark removed");
                    dispatch(remove(item.id));
                  }}
                >
                  remove
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
