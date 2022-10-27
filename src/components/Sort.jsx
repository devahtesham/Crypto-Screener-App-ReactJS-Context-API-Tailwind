import React, { useContext } from "react";
import selecticon from "../assets/select-icon.svg";
import { cryptoContext } from "../context/CryptoContext";

const Sort = () => {
  const { setSortOrder } = useContext(cryptoContext);
  const selectOrderHandler = (e) => {
    console.log(e.target.value);
    setSortOrder(e.target.value);
  };
  return (
    <div className="mr-7">
      <label
        htmlFor="sort"
        className="relative flex justify-center items-center"
      >
        <span className="font-bold mr-2">Sort By:</span>
        <select
          name=""
          id=""
          className="rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0"
          onChange={selectOrderHandler}
        >
          <option value="market_cap_desc">market cap desc</option>
          <option value="market_cap_asc">market cap asc</option>
          <option value="volume_desc">volume desc</option>
          <option value="volume_asc">volume asc</option>
          <option value="id_desc">id desc</option>
          <option value="id_asc">id asc</option>
          <option value="gecko_desc">gecko desc</option>
          <option value="gecko_asc">gecko asc</option>
        </select>
        <img
          src={selecticon}
          alt=""
          className="absolute w-[0.8rem] h-auto right-[0.2rem] top-2 pointer-events-none"
        />
      </label>
    </div>
  );
};

export default Sort;
