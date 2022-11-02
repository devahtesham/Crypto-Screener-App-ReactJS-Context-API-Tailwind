import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TrendingContext = createContext({});
export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();
  const getTrendData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      // console.log("Trending response", response.data.coins);
      setTrendData(response.data.coins);
    } catch (error) {
      console.log(error);
    }
  };
  const resetTrendingResults = () => {
    getTrendData();
  };
  useEffect(() => {
    getTrendData();
  }, []);
  return (
    <TrendingContext.Provider value={{ trendData, resetTrendingResults }}>
      {children}
    </TrendingContext.Provider>
  );
};
