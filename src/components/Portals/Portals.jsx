import React from "react";
import ReactDOM from "react-dom";
import CryptoDetails from "../CryptoDetails";
const Portals = () => {
  return ReactDOM.createPortal(
    <CryptoDetails />,
    document.getElementById("modal")
  );
};

export default Portals;
