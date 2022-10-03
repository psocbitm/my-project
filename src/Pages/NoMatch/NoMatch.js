import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <div>No Match</div>
      <div>
        <Link to="/">Go to the home page</Link>
      </div>
    </div>
  );
}

export default NoMatch;
