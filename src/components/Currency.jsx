import React from "react";

const Currency = () => {
  return (
    <div className="flex mr-7">
      <form className="flex items-center font-nunito mr-12 relative">
        <label
          htmlFor="currency"
          className="font-bold relative mr-2 flex justify-center items-center"
        >
          currency :
        </label>
        <input
          type="text"
          name="currency"
          placeholder="usd"
          className="w-16 rounded bg-gra-200 pl-2 required outline-0 border border-transparent focus: border-cyan placeholder:text-gray-100 "
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Currency;
