"use client";
import React, { useState } from "react";
import Search from "../../components/Search";
import Movie from "../../components/Movie";

const page = () => {
  const [query, setquery] = useState("superman");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="text-center mx-10">
      <Search setquery={setquery} setSearchQuery={setSearchQuery} />
      <Movie query={query} searchQuery={searchQuery} />
    </div>
  );
};

export default page;
