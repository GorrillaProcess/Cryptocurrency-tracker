import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coin/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        <span className="text-declaration-none">
          {coin.symbol.toUpperCase()}
        </span>
        <span className="text-declaration-none">€ {coin.current_price}</span>
        <span className="text-declaration-none">{coin.market_cap}</span>
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger me-3"
              : "text-success me-3"
          }
        >
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down mr-5"></i>
          ) : (
            <i className="fas fa-sort-up mr-5"></i>
          )}
          {coin.price_change_percentage_24h.toFixed(2)} %
        </span>
        <i
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="delete-icon far fa-times-circle text-danger"
        ></i>
      </li>
    </Link>
  );
};

export default Coin;
