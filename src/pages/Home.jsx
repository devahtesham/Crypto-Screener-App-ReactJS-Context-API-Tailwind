import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { ContextProvider } from "../context/CryptoContext";

const Home = () => {
  return (
    <>
      <ContextProvider>
        <main className=" text-white flex flex-col items-center justify-center w-full h-full font-nunito relative">
          <div className="w-screen h-screen bg-gray-300 fixed -z-10"></div>
          <Logo />
          <Navigation />
          {/* we use outlet bcs we want to access childs route of home route */}
          <Outlet />
        </main>
      </ContextProvider>
    </>
  );
};

export default Home;
