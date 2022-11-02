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
  const [coinSearch, setCoinSearch] = useState("");
  // currency
  const [currency, setCurrency] = useState("usd");
  // display table w.r.t currency
  const [isTableDisplay, setIsTableDisplay] = useState(true);
  // sorting order
  const [sortOrder, setSortOrder] = useState("market_cap_desc");
  // current display page
  const [currDisplayPg, setCurrDisplayPg] = useState(1); // bydefault page 1 render hogaa;
  // totalno of coins
  const [totalPages, setTotalPages] = useState(250);
  // this function is for getting coins per page
  const [perPage, setPerPage] = useState(10);
  // this is for coin related data which search from parameter
  const [coinData, setCoinData] = useState("");

  // this function is for getting all the coins details
  const getApiData = async () => {
    setCryptoData(); // before every time call this api we set the value of setCryptoData empty to show our loader
    setTotalPages(13220); // we known this api has following no of coins
    // to get list of coins
    // try {
    //   const response = await axios.get(
    //     `https://api.coingecko.com/api/v3/coins/list`
    //   );
    //   const data = response.data;
    //   // console.log("original data", data.length);
    //   setTotalPages(data.length);
    // } catch (error) {
    //   console.log(error);
    // }
    // to get coins data
    try {
      // console.log("perPage", perPage);
      const response = await axios.get(
        // coinSearch men by default( very first time ) " " empty string jaaega islye wo tamaam coins ka data show kregaa
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortOrder}&per_page=${perPage}&page=${currDisplayPg}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
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
      // console.log(response.data);
      const data = response.data.coins;
      setSearchInputData([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  // this function is for getting coin data through param
  const getCoinData = async (coinId) => {
    setCoinData(); // before every time call this api we set the value of setCoinData empty to show our loader
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false
        `
      );
      // console.log(response);
      setCoinData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // this function is for reset coin detail
  const resetFunc = () => {
    setCurrDisplayPg(1);
    setCoinSearch("");
  };

  useEffect(() => {
    getApiData();
  }, [coinSearch, currency, sortOrder, currDisplayPg, perPage]);
  // console.log("coinSearch", coinSearch);

  return (
    <cryptoContext.Provider
      value={{
        cryptoData,
        searchInputData,
        getSearchData,
        setCoinSearch,
        currency,
        setCurrency,
        setIsTableDisplay,
        isTableDisplay,
        setSortOrder,
        currDisplayPg,
        setCurrDisplayPg,
        totalPages,
        resetFunc,
        setPerPage,
        perPage,
        coinData,
        getCoinData,
      }}
    >
      {children}
    </cryptoContext.Provider>
  );
};
