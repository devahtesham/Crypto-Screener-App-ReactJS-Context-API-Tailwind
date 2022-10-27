import React, { useContext, useState } from "react";
import SubmitIcon from "../assets/submit-icon.svg";
import { cryptoContext } from "../context/CryptoContext";
const currencyArr = [
  "AED",
  "ARS",
  "AUD",
  "BDT",
  "BHD",
  "BMD",
  "BRL",
  "CAD",
  "CHF",
  "CLP",
  "CZK",
  "DKK",
  "GBP",
  "HKD",
  "HUF",
  "ILS",
  "INR",
  "KWD",
  "LKR",
  "MMK",
  "MXN",
  "MYR",
  "NGN",
  "NOK",
  "NZD",
  "PHP",
  "PKR",
  "PLN",
  "SAR",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "UAH",
  "VEF",
  "VND",
  "ZAR",
  "XDR",
  "USD",
];
const Currency = () => {
  const [currencyInput, setCurrencyInput] = useState("");
  const { setCurrency, setIsTableDisplay } = useContext(cryptoContext);
  const currencyInputHandler = (e) => {
    setCurrencyInput(e.target.value);
  };
  const currencySubmitHandler = (e) => {
    console.log("currency form is submitted");
    e.preventDefault();
    // setCurrency(currencyInput);
    setCurrencyInput("");
    const updCurr = currencyInput.toUpperCase();
    if (!currencyArr.includes(updCurr)) {
      console.log("Currency not match");
      setIsTableDisplay(false);
    } else {
      setIsTableDisplay(true);
      setCurrency(updCurr);
      console.log(updCurr);
    }
    // console.log("currency", currency);
  };
  return (
    <div className="flex mr-7">
      <form
        className="flex items-center font-nunito mr-12 relative"
        onSubmit={currencySubmitHandler}
      >
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
          className="w-16 rounded bg-gray-200 pl-2 required outline-0 border border-transparent focus:border-cyan placeholder:text-gray-100 leading-4 "
          onChange={currencyInputHandler}
          value={currencyInput}
        />
        <button type="submit" className="ml-1 cursor-pointer">
          <img src={SubmitIcon} alt="submit-icon" className="w-full h-auto" />
        </button>
      </form>
    </div>
  );
};

export default Currency;
