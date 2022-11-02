import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import ParticleJS from "../components/ParticleJS";
import { ContextProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";

const Home = () => {
  return (
    <>
      <ContextProvider>
        <TrendingProvider>
          <StorageProvider>
            <main className=" text-white flex flex-col items-center justify-center w-full h-full font-nunito relative">
              <div className="w-screen h-screen fixed -z-10 bg-gray-300 top-0 left-0 right-0">
                {/* <ParticleJS id="tsparticles" /> */}
              </div>
              <Logo />
              <Navigation />
              {/* we use outlet bcs we want to access childs route of home route */}
              <Outlet />
            </main>
          </StorageProvider>
        </TrendingProvider>
      </ContextProvider>
    </>
  );
};

export default Home;
