/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

/* eslint-disable no-unused-vars */
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <span className="gap-2 text-sm font-medium md:gap-3">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
