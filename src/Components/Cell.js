import React from "react";

const Cell = ({ blur, getValues, idx, value, isDisabled }) => {

  return (
    <div className="cell grow">
      <input
        id={`input-${idx}`}
        key={`input-${idx}`}
        className="hide-this"
        type="text"
        value={value}
        onBlur={(e) => blur(e)}
        onChange={(e) => getValues(e, idx)}
        aria-label={`cell-${idx}`}
        disabled={isDisabled}
      />
    </div>
  );
};
export default Cell;
