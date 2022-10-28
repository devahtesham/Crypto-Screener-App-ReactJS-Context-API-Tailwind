import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComp from "../components/TableComp";
import { cryptoContext } from "../context/CryptoContext";
import Error from "./Error";

const Crypto = () => {
  const { isTableDisplay } = useContext(cryptoContext);
  return (
    <>
      <section className="w-[80%] h-full flex flex-col mt-16 relative">
        <Filters />
        {isTableDisplay ? <TableComp /> : <Error />}
      </section>
      <Outlet />
    </>
  );
};

export default Crypto;
