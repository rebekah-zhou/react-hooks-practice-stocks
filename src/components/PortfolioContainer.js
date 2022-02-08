import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onCardClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(stock => {
          return <Stock key={stock.id} stock={stock} onCardClick={onCardClick}/>
        })
      }
    </div>
  );
}

export default PortfolioContainer;
