import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-5">
      <ul className="flex">
        <li>
          <Link to="/home" className="me-3 text-xl font-bold text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/watchList" className="text-xl font-bold text-blue-600">
            Watchlist
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
