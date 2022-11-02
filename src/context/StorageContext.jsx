import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { cryptoContext } from "./CryptoContext";

export const StorageContext = createContext({});
export const StorageProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  // state for getting saved coins data
  const [savedCoins, setSavedCoins] = useState();

  const { currency, sortOrder } = useContext(cryptoContext);

  const saveCoins = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));
    if (oldCoins.includes(coinId)) {
      return;
    }
    let newCoins = [...oldCoins, coinId];
    localStorage.setItem("coins", JSON.stringify(newCoins));
    setAllCoins(newCoins);
  };
  const deleteCoins = (coinId) => {
    // console.log("coinId", coinId);
    let oldCoins = JSON.parse(localStorage.getItem("coins"));
    let filteredCoins = oldCoins.filter((coin) => coin !== coinId);
    // console.log("filteredCoins", filteredCoins);
    setAllCoins(filteredCoins);
    localStorage.setItem("coins", JSON.stringify(filteredCoins));
  };
  // get saved coins
  const getSavedCoins = async (totalCoins = allCoins) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(
          ","
        )}&order=${sortOrder}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      );
      console.log("i am calling");
      console.log("savedCoins", response.data);
      setSavedCoins(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // reset saved coins data
  const resetSavedResults = () => {
    getSavedCoins(allCoins);
  };
  useEffect(() => {
    let coinData = localStorage.getItem("coins");
    // let isCoins = JSON.parse(coinData);
    if (!coinData) {
      //if there is empty so set empty array in a local storage
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      // set the state with the current values coming from local storage
      // ye part jb k lye hyy jb ham ne koi coin add kradye phr then ham refresh krrahy hen tu refresh krne pr local storage men mojood tmaam coins yahan is state men save hojaengn
      console.log("I am else part");
      console.log("allCoins", allCoins);
      let tot_coins = JSON.parse(localStorage.getItem("coins"));
      setAllCoins(tot_coins);
      if (allCoins.length > 0) {
        getSavedCoins(allCoins);
      } else {
        setSavedCoins();
      }
    }
  }, [allCoins.length]);
  return (
    <StorageContext.Provider
      value={{
        allCoins,
        saveCoins,
        deleteCoins,
        savedCoins,
        resetSavedResults,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
