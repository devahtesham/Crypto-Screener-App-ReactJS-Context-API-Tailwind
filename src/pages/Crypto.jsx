import React from "react";
import Filters from "../components/Filters";
import TableComp from "../components/TableComp";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 relative">
      <Filters />
      <TableComp />
    </section>
  );
};

export default Crypto;
