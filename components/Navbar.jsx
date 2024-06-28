import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 py-4 px-10 flex items-center justify-around fixed top-0 left-0">
      <a href="/" className="text-2xl">
        <span className="text-emerald-500">TMBD</span> MOVIES
      </a>
      <ul className="flex items-center justify-between gap-10">
        <li>
          <a href="/" className="hover:text-gray-50 duration-100">
            Home
          </a>
        </li>
        <li>
          <a href="/movie" className="hover:text-gray-50 duration-100">
            Movies
          </a>
        </li>
        <li>
          <a href="/ar_movies" className="hover:text-gray-50 duration-100">
            Arabic Movies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
