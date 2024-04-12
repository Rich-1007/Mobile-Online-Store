import React from "react";

const SearchSec = () => {
  return (
    <div className="bg-white shadow-md rounded-lg  w-screen p-4 flex items-center justify-around  sm:flex-row gap-2 flex-col">
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow p-2  rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg focus:outline-none">
          Search
        </button>
      </div>

      <div className="border border-gray-300 hover:border-gray-500 rounded-lg p-2 ">
        <button>Price -- Low to High</button>
      </div>

      <div className="border border-gray-300 hover:border-gray-500 rounded-lg p-2 ">
        <button>Price -- High to Low</button>
      </div>
    </div>
  );
};

export default SearchSec;
