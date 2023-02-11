import React, { useState } from "react";

const Search = () => {
  const [input, SearchInput] = useState("");
  return (
    <div className="flex w-4/5 gap-4 p-3 mx-auto my-8 rounded-lg bg-search-bg">
      <input
        type="text"
        name=""
        id=""
        placeholder="Type to begin Search, or use the global shortcut"
        value={input}
        className="flex-1 bg-white p-[14px] rounded-lg border-2"
      />
      <div className="flex items-center gap-2 my-auto text-lg font-bold tracking-wider">
        <span className="p-4 py-3 border rounded-lg border-search-border bg-search-bg text-search-text">
          Ctrl
        </span>
        <span className="text-search-border">+</span>
        <span className="p-4 py-3 border rounded-lg border-search-border bg-search-bg text-search-text">
          K
        </span>
      </div>
    </div>
  );
};

export default Search;
