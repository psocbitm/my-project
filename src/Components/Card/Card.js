import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { append } from "../../Features/BookmarkList/BookmarkListSlice";
import axios from "axios";
import { login } from "../../Features/Auth/AuthSlice";
function Card(props) {
  const count = useSelector((state) => state.BookmarkList.bookmarks);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.Auth.user);
  function bookmark() {
   if (loggedIn) {
    count.find((i) => i.id === props.item.id)
    ? alert("Already added")
    : dispatch(append(props.item)) && alert("Added");
   } else {
    alert("Login First")
   }
  }
  return (
    <div className="w-[450px]  bg-black/25 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg flex justify-between text-lg gap-x-6">
      <div className="text-white">{props.item.fields.Name}</div>

      <div className="cursor-pointer" onClick={bookmark}>
        {count.find((i) => i.id === props.item.id) ? (
          <div className=" font-medium text-purple  ">Bookmarked</div>
        ) : (
          <div className="text-white/50 hover:text-purple font-medium">
            Bookmark
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
