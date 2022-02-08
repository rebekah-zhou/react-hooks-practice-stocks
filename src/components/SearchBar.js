import React from "react";

function SearchBar({ onAlphaChange, onPriceChange }) {
  // const [isAlpha, setIsAlpha] = useState(false)

  function handleAlphaChange() {
    //setIsAlpha(() => !isAlpha)
    onAlphaChange()
  }

  function handlePriceChange() {
    onPriceChange()
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleAlphaChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handlePriceChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
