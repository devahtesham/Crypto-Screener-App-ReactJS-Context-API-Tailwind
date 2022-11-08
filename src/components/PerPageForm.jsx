import React, { useContext, useState } from "react";
import SubmitIcon from "../assets/submit-icon.svg";
import { cryptoContext } from "../context/CryptoContext";

const PerPageForm = () => {
  const [pageInputValue, setPageInputvalue] = useState("");
  const { setPerPage } = useContext(cryptoContext);
  const perPageValueHandler = (e) => {
    setPageInputvalue(e.target.value);
  };
  const perPgValueSubmitHandler = (e) => {
    e.preventDefault();
    if (pageInputValue === "" || pageInputValue > 250) {
      return;
    }
    console.log("pageInputValue", pageInputValue);
    setPerPage(pageInputValue);
    setPageInputvalue("");
  };
  return (
    <form
      className="flex items-center font-nunito lg:mr-12 relative lg:mb-0 mb-[0.7rem]"
      onSubmit={perPgValueSubmitHandler}
    >
      <label
        htmlFor="perpage"
        className="font-bold relative mr-2 flex justify-center items-center"
      >
        Perpage
      </label>
      <input
        type="number"
        min="1"
        max="250" // which is the limit of the API
        name="perpage"
        placeholder="10"
        className="w-16 rounded bg-gray-200 pl-2 required outline-0 border border-transparent focus:border-cyan placeholder:text-gray-100 leading-4 "
        onChange={perPageValueHandler}
        value={pageInputValue}
      />
      <button type="submit" className="ml-1 cursor-pointer">
        <img src={SubmitIcon} alt="submit-icon" className="w-full h-auto" />
      </button>
    </form>
  );
};

export default PerPageForm;
