import React from "react";
import CurrencyFormat from "react-currency-format";

function Currency({ price }) {
  return (
    <CurrencyFormat
      value={price}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"₹"}
    />
  );
}

export default Currency;
