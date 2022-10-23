import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Crypto from "../pages/Crypto";
import Saved from "../pages/Saved";
import Trending from "../pages/Trending";

const Router = () => {
  return (
    <>
      <Routes>
        {/* //nested Routing */}
        {/* hamne Home andr saary child routes islye bnaaye kiun k ham Home ko as a layout use krengn   */}
        <Route path="/" element={<Home />}>
          <Route index path="/" element={<Crypto />} />
          <Route path="saved" element={<Saved />} />
          <Route path="trending" element={<Trending />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
