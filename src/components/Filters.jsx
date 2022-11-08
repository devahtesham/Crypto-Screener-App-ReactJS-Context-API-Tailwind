import React from "react";
import Currency from "./Currency";
import Search from "./Search";
import Sort from "./Sort";

const Filters = () => {
  return (
    <div className="w-full lg:h-[4rem] md:h-[6rem] lg:border-2 border-0 lg:border-gray-100  rounded-lg flex items-center justify-between relative bg-gray-300 xl:mt-0 mt-10">
      <Search />
      <div className="flex items-center currency-sort-panel lg:flex-row flex-col ">
        <Currency />
        <Sort />
      </div>
    </div>
  );
};

export default Filters;
