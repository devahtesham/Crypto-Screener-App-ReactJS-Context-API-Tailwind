// Search Text ======= inputValue
import debounce from "lodash.debounce";
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../assets/search-icon.svg";
import { cryptoContext } from "../context/CryptoContext";
// create another component namely SearchInputDataComp bcz the state present in it render component again and again when its updated so our api hit bcz of its re-rendering , so we separate the inputValue state in other comp and debouncing function in separate comp
const SearchInputDataComp = ({ handleDebounceFunc }) => {
  const [inputValue, setInputValue] = useState("");
  const { searchInputData, setCoinSearch } = useContext(cryptoContext);
  const inputValueHandler = (e) => {
    let inputText = e.target.value;
    setInputValue(inputText);
    handleDebounceFunc(inputText);
  };
  const coinDataHandler = (coin) => {
    console.log(coin);
    setCoinSearch(coin);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    coinDataHandler(inputValue);
  };
  return (
    <>
      {/* search form */}
      <form
        className="xl:w-96 lg:w-72 relative flex items-center ml-7 font-nunito"
        onSubmit={formSubmitHandler}
      >
        <input
          type="text"
          name="search"
          placeholder="Search here ..."
          className="h-full w-full rounded bg-gray-200 pl-2 required outline-0 border border-transparent focus:border-cyan placeholder:text-gray-100 "
          onChange={inputValueHandler}
          value={inputValue}
        />
        <button className="absolute right-1 cursor-pointer">
          <img src={SearchIcon} alt="search" className="w-full h-auto" />
        </button>
      </form>
      {/* form dropdown while typing */}
      {inputValue.length > 0 ? (
        <ul className="absolute top-11 right-0 overflow-x-hidden w-96 h-96 rounded py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md scrollbar-thin scrollbar-thumb-cyan scrollbar-track-gray-200">
          {/* <li>bitcoin</li>
          <li>etherium</li> */}
          {searchInputData ? (
            searchInputData.map((coin) => {
              return (
                <li
                  key={coin.id}
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  onClick={() => {
                    coinDataHandler(coin.id);
                    setInputValue("");
                  }}
                >
                  <img
                    src={coin.thumb}
                    alt={coin.name}
                    className="w-[1rem] h-[1rem] mx-2.5"
                  />
                  <span className=""> {coin.name} </span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
                role="status"
              ></div>
              <span className="ml-3">Searching ...</span>
            </div>
          )}
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
  }, 3000);

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
    <div className="relative search-container">
      <SearchInputDataComp handleDebounceFunc={debouncFunc} />
    </div>
  );
};

export default Search;
