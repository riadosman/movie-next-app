"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
const Search = ({ setquery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectChange = (e) => {
    setquery(e.target.value);
  };

  return (
    <div className="mt-20">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        className="mx-auto w-[500px] mt-20 outline-none bg-gray-800 text-white capitalize px-6 rounded-xl py-4 focus:border-gray-50 border-transparent duration-100 border-2"
      />
      <span className="inline-block relative left-[-50px] text-[30px] top-[8px] cursor-pointer">
        <IoIosSearch />
      </span>
      <select
        defaultValue="superman"
        onChange={handleSelectChange} // Handle changes in the select element
        className="text-white px-4 py-4 bg-gray-800 outline-none rounded-lg"
      >
        <option value="superman" selected>
          Superman
        </option>
        <option value="spiderman">Spiderman</option>
        <option value="batman">Batman</option>
        <option value="default">Default</option>
      </select>
    </div>
  );
};

export default Search;
