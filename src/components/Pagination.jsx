import React, { useState } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
const Pagination = () => {
  // state for showing current page
  const [currentPage, setCurrentPage] = useState(1);
  const tot_pages = 250;
  const nextPageHandler = (e) => {
    if (currentPage === tot_pages) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPageHandler = (e) => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const prevDots = (e) => {
    if (currentPage - 3 <= 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 2);
    }
  };
  const nextDots = (e) => {
    if (currentPage + 3 >= tot_pages) {
      setCurrentPage(tot_pages - 1);
    } else {
      setCurrentPage(currentPage + 3);
    }
  };
  console.log("currentPage", currentPage);
  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-end text-sm">
        <li className="flex items-center">
          <button
            className="outline-0 hover:text-cyan w-8"
            onClick={prevPageHandler}
          >
            <img
              src={paginationArrow}
              alt="left arrow"
              className="w-full h-auto rotate-180"
            />
          </button>
        </li>
        {currentPage + 1 === tot_pages || currentPage === tot_pages ? (
          <li>
            <button
              className="text-lg outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center"
              onClick={prevDots}
            >
              ...
            </button>
          </li>
        ) : null}
        {currentPage - 1 !== 0 ? (
          <li>
            <button
              className=" outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              onClick={prevPageHandler}
            >
              {currentPage - 1}
            </button>
          </li>
        ) : null}
        <li>
          <button
            className=" outline-0 rounded-full  w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
            disabled
          >
            {currentPage}
          </button>
        </li>
        {currentPage !== tot_pages ? (
          <li>
            <button
              className=" outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              onClick={nextPageHandler}
            >
              {currentPage + 1}
            </button>
          </li>
        ) : null}
        {currentPage !== tot_pages && currentPage + 1 !== tot_pages ? (
          <li>
            <button
              className="text-lg outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center"
              onClick={nextDots}
            >
              ...
            </button>
          </li>
        ) : null}
        {currentPage !== tot_pages ? (
          <li>
            <button
              className=" outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
              onClick={() => {
                setCurrentPage(tot_pages);
              }}
            >
              {tot_pages}
            </button>
          </li>
        ) : null}
        <li>
          <button
            onClick={nextPageHandler}
            className="outline-0 hover:text-cyan w-8"
          >
            <img
              src={paginationArrow}
              alt="right arrow"
              className="w-full h-auto"
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
