import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log(localStorage.getItem("watchList").split(","));
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList").split(",") || [
      "bitcoin",
      "ethereum",
      "ripple",
      "vechain",
      "cardano",
      "basic-attention-token",
      "hedera-hashgraph",
      "dogecoin",
      "tezos",
      "tether",
      "polkadot",
      "tron",
      "stellar",
      "matic-network"
    ]
  );
  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);
  const addCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };
  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };
  return (
    <WatchListContext.Provider value={{ addCoin, watchList, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
