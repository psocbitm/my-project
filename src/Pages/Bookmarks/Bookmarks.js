import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emptyList,
  remove,
} from "../../Features/BookmarkList/BookmarkListSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
function Bookmarks() {
  const count = useSelector((state) => state.BookmarkList.bookmarks);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.Auth.user);
  return (
    <div>
      {loggedIn ? (
        <div>
          {count.length === 0 ? (
            <div>
              <h1 className="text-4xl text-center text-white my-10">
                Bookmarks
              </h1>
              <div className="text-center text-white font-xl">
                No bookmarks yet
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-4xl text-center text-white my-10">
                Bookmarks
              </h1>
              <div
                className="cursor-pointer ml-5 mb-7 text-white flex items-center"
                onClick={() => {
                  alert("Bookmarks cleared");
                  dispatch(emptyList());
                }}
              >
                <XMarkIcon className="h-6 w-6" />
                <span className="text-lg mr-8"> Clear all bookmarks</span>
              </div>
              <div className="flex justify-center flex-wrap gap-x-5 gap-y-5">
                {count.map((item) => {
                  return (
                    <div
                      className=" w-[400px]  bg-white/50 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg flex justify-between items-center"
                      key={item.id}
                    >
                      <div>{item.fields.Name}</div>
                      <div
                        className="cursor-pointer hover:text-embers text-white "
                        onClick={() => {
                          alert("Bookmark removed");
                          dispatch(remove(item.id));
                        }}
                      >
                        Remove
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-2xl text-white">
          <h1 className="my-5">Bookmarks</h1>
          <div>Please login to view bookmarks</div>
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
