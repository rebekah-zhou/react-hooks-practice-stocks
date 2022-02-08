import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onCardClick }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => {
        return <Stock key={stock.id} stock={stock} onCardClick={onCardClick} />
      })}
    </div>
  );
}

export default StockContainer;
