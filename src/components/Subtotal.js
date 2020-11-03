import React, { useContext } from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { StateContext } from "../StateProvider";

function Subtotal() {
  const { amount, total } = useContext(StateContext);

  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({amount} items): <strong>${total}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This is order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button disabled={total === 0} onClick={(e) => history.push("./payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
