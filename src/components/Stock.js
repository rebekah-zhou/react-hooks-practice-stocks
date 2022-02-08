import React, { useState } from "react";

function Stock({ stock, onCardClick }) {
  const {name, ticker, type, price} = stock

  function handleCardClick() {
    onCardClick(stock)
  }

  return (
    <div>
      <div onClick={handleCardClick} 
        style={{'border': 'solid'}}
        name={type} 
        className='card'>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
