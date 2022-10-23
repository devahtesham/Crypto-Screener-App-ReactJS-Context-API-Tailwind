// context api has three steps:
// 1) create context       2) provider     3) consumer

import { createContext, useEffect, useState } from "react";
import axios from "axios";

// STEP: 01 //CREATE CONTEXT
export const cryptoContext = createContext({});

// STEP: 02 //PROVIDER COMPONENT
export const ContextProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchInputData, setSearchInputData] = useState();
  // this function is for getting all the coins details
  const getApiData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      );
      // console.log(response.data);
      const data = response.data;
      setCryptoData([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  // this function is for getting the specific coin detail that user search
  const getSearchData = async (userInput) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${userInput}`
      );
      console.log(response.data);
      const data = response.data;
      setSearchInputData([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <cryptoContext.Provider
      value={{ cryptoData, searchInputData, getSearchData }}
    >
      {children}
    </cryptoContext.Provider>
  );
};