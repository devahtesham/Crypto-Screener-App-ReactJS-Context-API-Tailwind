// Search Text ======= inputValue
import debounce from "lodash.debounce";
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../assets/search-icon.svg";
import { cryptoContext } from "../context/CryptoContext";
// create another component namely SearchInputDataComp bcz the state present in it render component again and again when its updated so our api hit bcz of its re-rendering , so we separate the inputValue state in other comp and debouncing function in separate comp
const SearchInputDataComp = ({ handleDebounceFunc }) => {
  const [inputValue, setInputValue] = useState("");
  const inputValueHandler = (e) => {
    let inputText = e.target.value;
    setInputValue(inputText);
    handleDebounceFunc(inputText);
  };
  return (
    <>
      {/* search form */}
      <form className="w-96 relative flex items-center ml-7 font-nunito">
        <input
          type="text"
          name="search"
          placeholder="Search here ..."
          className="w-full rounded bg-gray-200 pl-2 required outline-0 border border-transparent focus:border-cyan placeholder:text-gray-100 "
          onChange={inputValueHandler}
          value={inputValue}
        />
        <button className="absolute right-1 cursor-pointer">
          <img src={SearchIcon} alt="search" className="w-full h-auto" />
        </button>
      </form>
      {/* form dropdown while typing */}
      {inputValue.length > 0 ? (
        <ul className="absolute top-11 right-0 overflow-x-hidden w-full h-96 rounded py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          <li>bitcoin</li>
          <li>etherium</li>
        </ul>
      ) : null}
    </>
  );
};
const Search = () => {
  // this is our main component

  const { getSearchData } = useContext(cryptoContext);
  // debouncing using loadash liabrary
  const debouncFunc = debounce((val) => {
    getSearchData(val);
  }, 2500);

  //   =============== PREVENT UNNECESSARY API CALLS (DEBOUNCING IMPLEMENTATION using useEffect and setTimeout) ==================
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       getSearchData(inputValue);
  //     }, 4000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [inputValue]);
  //   =============== PREVENT UNNECESSARY API CALLS (DEBOUNCING IMPLEMENTATION) ==================
  return (
    <>
      <SearchInputDataComp handleDebounceFunc={debouncFunc} />
    </>
  );
};

export default Search;
