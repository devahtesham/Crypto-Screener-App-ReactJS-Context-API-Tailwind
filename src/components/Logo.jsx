import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <>
      <Link
        to="/"
        className="absolute top-[1.5rem] left-[1.5rem] [text-decoration:none] text-lg flex items-center text-cyan"
      >
        <img src={logo} alt="logo" />
        <span>CryptoHUB</span>
      </Link>
    </>
  );
};

export default Logo;
