import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filterBy, setFilterBy] = useState("All")

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then(res => res.json())
      .then(stocks => setStocks(stocks))
  }, [])

  function handleBuyClick(stock) {
    setPortfolio([...portfolio, stock])
  }

  function handleSellClick(deletedStock) {
    const updatedPortfolio = portfolio.filter(stock => stock.id !== deletedStock.id)
    setPortfolio(updatedPortfolio)
  }

  function handleAlphaChange() {
    setFilterBy("Alpha")
  }

  function handlePriceChange() {
    setFilterBy("Price")
  }

  const stocksToDisplay = [...stocks]
  if (filterBy === 'Alpha') {
    stocksToDisplay.sort(function(a, b) {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }
  if (filterBy === 'Price') {
    stocksToDisplay.sort(function(a, b) {
      return a.price - b.price
    })
  }

  return (
    <div>
      <SearchBar 
        onAlphaChange={handleAlphaChange}
        onPriceChange={handlePriceChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocksToDisplay}
            onCardClick={handleBuyClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio}
            onCardClick={handleSellClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
