import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="mt-16 w-[40%] flex align-middle justify-around border border-cyan rounded-lg bg-gray-300">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          // console.log(isActive, "Crypto link");
          return `w-full text-base font-nunito m-2.5  border-0 rounded capitalize font-bold text-center ${
            isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
          }`;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="trending"
        className={({ isActive }) => {
          // console.log(isActive, "trending link");
          return `w-full text-base font-nunito m-2.5  border-0 rounded capitalize font-bold text-center ${
            isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
          }`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="saved"
        className={({ isActive }) => {
          // console.log(isActive, "Saved link");
          return `w-full text-base font-nunito m-2.5  border-0 rounded capitalize font-bold text-center ${
            isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300"
          }`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
