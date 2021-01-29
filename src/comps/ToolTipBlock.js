import React from "react";

const ToolTipBlock = props => {
  const { targetAmount, getTotalAmount } = props;
  let totalAmountDisplayText =
    getTotalAmount === 0 || getTotalAmount < 0
      ? getTotalAmount < 0
        ? "Successfully reached our goal with an extra donation of " +
          "$" +
          Math.abs(getTotalAmount)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : "Successfully reached our goal"
      : "still needed to fund this project";

  let amountDisplay;

  if (getTotalAmount === 0) {
    amountDisplay = targetAmount;
  } else if (getTotalAmount < 0) {
    amountDisplay = Math.abs(getTotalAmount) + targetAmount;
  } else {
    amountDisplay = getTotalAmount;
  }
  return (
    <div className="tool-tip-block">
      <span className="total-amount">
        <sup className="dollar_sign_sup">$</sup>
        <span className="total_amount_number">
          {amountDisplay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </span>
      {"  "}
      <span className="total_amount_display_text">
        {totalAmountDisplayText}
      </span>
    </div>
  );
};

export default ToolTipBlock;
