import React, { useContext, useState } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { cryptoContext } from "../context/CryptoContext";
import PerPageForm from "./PerPageForm";
const Pagination = () => {
  // state for showing current page
  const { setCurrDisplayPg, currDisplayPg, totalPages, perPage, cryptoData } =
    useContext(cryptoContext);
  const tot_pages = Math.ceil(totalPages / perPage);
  const nextPageHandler = (e) => {
    if (currDisplayPg === tot_pages) {
      return;
    } else {
      setCurrDisplayPg(currDisplayPg + 1);
    }
  };
  const prevPageHandler = (e) => {
    if (currDisplayPg === 1) {
      return;
    } else {
      setCurrDisplayPg(currDisplayPg - 1);
    }
  };
  const prevDots = (e) => {
    if (currDisplayPg - 3 <= 1) {
      setCurrDisplayPg(tot_pages + 1);
    } else {
      setCurrDisplayPg(currDisplayPg - 2);
    }
  };
  const nextDots = (e) => {
    if (currDisplayPg + 3 >= tot_pages) {
      setCurrDisplayPg(tot_pages - 1);
    } else {
      setCurrDisplayPg(currDisplayPg + 3);
    }
  };
  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center lg:flex-row flex-col">
        <PerPageForm />
        <ul className="flex items-center justify-end text-sm lg:mb-0 mb-[0.7rem]">
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
          {currDisplayPg + 1 === tot_pages || currDisplayPg === tot_pages ? (
            // agr last ya second last page pr hen tu ye dots srf visible hongn otherwise nah
            <li>
              <button
                className="text-lg outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center"
                onClick={prevDots}
              >
                ...
              </button>
            </li>
          ) : null}
          {currDisplayPg - 1 !== 0 ? (
            // agr men page no 1 pr hoon srf jb ye button nah dikhygaa
            <li>
              <button
                className=" outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                onClick={prevPageHandler}
              >
                {currDisplayPg - 1}
              </button>
            </li>
          ) : null}
          <li>
            <button
              className=" outline-0 rounded-full  w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
              disabled
            >
              {currDisplayPg}
            </button>
          </li>
          {currDisplayPg !== tot_pages && currDisplayPg + 1 !== tot_pages ? (
            // yahan ham ye chah rahy hen k ye button hamary last page r us se pehly wala second last page pr show na hoo
            <li>
              <button
                className=" outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                onClick={nextPageHandler}
              >
                {currDisplayPg + 1}
              </button>
            </li>
          ) : null}
          {currDisplayPg !== tot_pages && currDisplayPg + 1 !== tot_pages ? (
            // yahan ham ye chah rahy hen k ye button hamary last page r us se pehly wala second last page pr show na hoo
            <li>
              <button
                className="text-lg outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center"
                onClick={nextDots}
              >
                ...
              </button>
            </li>
          ) : null}
          {currDisplayPg !== tot_pages ? (
            // yahan ham ye chah rahy hen k ye button hamary last page pr show na hoo
            <li>
              <button
                className=" outline-0 hover:text-cyan rounded-full  w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                onClick={() => {
                  setCurrDisplayPg(tot_pages);
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
  } else {
    return null;
  }
};

export default Pagination;
