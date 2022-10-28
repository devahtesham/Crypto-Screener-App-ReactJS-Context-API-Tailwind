import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Crypto from "../pages/Crypto";
import Saved from "../pages/Saved";
import Trending from "../pages/Trending";
import CryptoDetails from "../components/CryptoDetails";

const Router = () => {
  return (
    <>
      <Routes>
        {/* //nested Routing */}
        {/* hamne Home andr saary child routes islye bnaaye kiun k ham Home ko as a layout use krengn   */}
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Crypto />}>
            <Route path=":coinId" element={<CryptoDetails />} />
          </Route>
          <Route path="saved" element={<Saved />} />
          <Route path="trending" element={<Trending />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
