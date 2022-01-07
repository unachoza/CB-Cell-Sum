import React, { useState } from "react";
import logo from "./logo.png";
import Cell from "./Components/Cell";
import { formatValueTo3, getTotal } from "./calcs/numberFormating";
import "./App.css";

const App = () => {
  const [cellValues, setCellValues] = useState([0, 0, 0]);
  const [total, setTotal] = useState([null]);
  const [showErrorText, setShowErrorText] = useState(false);

 const validateInputs = (input) => {
    return !isNaN(input)
  };

  const getValues = (e, idx) => {
    const updatedValue = parseInt(e.target.value, 10);
    const updatedInputValues = [...cellValues];
    updatedInputValues[idx] = updatedValue;
    setCellValues(updatedInputValues);
  };

  const handleBlur = (e) => {
    setShowErrorText(!validateInputs(e.target.value));
    setTotal(formatValueTo3(getTotal(cellValues)));
  };

  return (
    <div className="app">
      <div className="header-text">

      <img src={logo} alt="CB Insights logo" />
      <p className="app-intro">
        The first 3 cells in the grid contain input fields that accept numbers. The fourth cell in the grid will display
        the sum of the numbers in the first three cells.
        </p>
        <div className="error-text">

        {showErrorText && (
          <p role="alert">
            Please make sure you've entered a <em>number</em>
          </p>
        )}
        </div>
      </div>
      <div className="cell-container">
        {cellValues.map((cell, idx) => {
          return (
            <Cell idx={idx} key={`cell-${idx}`} getValues={(e) => getValues(e, idx)} blur={(e) => handleBlur(e)} showErrorText={showErrorText}/>
          );
        })}
        <Cell value={showErrorText ? "Error" : total} isDisabled={true} />
      </div>
    </div>
  );
};
export default App;
