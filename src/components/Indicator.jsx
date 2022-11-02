import React from "react";

const Indicator = ({ currentPrice, low, high }) => {
  const total = high - low;
  const green = Math.ceil(((high - currentPrice) * 100) / total);
  //   console.log("green ratio", green);
  return (
    <>
      <span
        className="bg-red w-[50%] rounded-l-lg h-1.5"
        style={{ width: `${100 - green}%` }}
      ></span>
      <span
        className="bg-green w-[50%] rounded-r-lg h-1.5"
        style={{ width: `${green}%` }}
      ></span>
    </>
  );
};

export default Indicator;
