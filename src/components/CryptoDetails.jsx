import React from "react";
import { useParams } from "react-router-dom";

const CryptoDetails = () => {
  const { coinId } = useParams();
  //   console.log(coinId);
  // here we use React portals bcz we use this component as a modal/overlay so by using portal for this type of scenarios is helpful bcz it doesnt distrub the main parent component but render on our desired location in a DOM
  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full bg-gray-200 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <h1>cryptoDetails</h1>
    </div>
  );
};

export default CryptoDetails;
