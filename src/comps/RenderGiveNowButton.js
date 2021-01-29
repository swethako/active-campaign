import React from "react";

// PLEASE UNCOMMENT THIS CODE TO SEE THE EXPIRY PAGE.
 /* const RenderGiveNowButton = (props) => {
    const { enteredAmount, numberOfExpiryDays, submitDonorEnteredAmount } = props;
    console.log("numberOfExpiryDays", numberOfExpiryDays);
    console.log("enteredAmount", enteredAmount);
    let buttonDisabled =
      (enteredAmount >= 5 && numberOfExpiryDays > 0) ? false : true;
    let buttonDisabledClassName = buttonDisabled
      ? "button_disabled"
      : "button_enabled";

    return (
      <button
        disabled={buttonDisabled}
        onClick={submitDonorEnteredAmount}
        className={buttonDisabledClassName}
      >
        Give Now
      </button>
    );
  };*/

  // PLEASE COMMENT THIS CODE TO SEE THE EXPIRY PAGE.
   const RenderGiveNowButton = (props) => {
    const { enteredAmount, submitDonorEnteredAmount } = props;
    let buttonDisabled = enteredAmount >= 5 ? false : true;
    let buttonDisabledClassName = buttonDisabled
      ? "button_disabled"
      : "button_enabled";

    return (
      <button
        disabled={buttonDisabled}
        onClick={submitDonorEnteredAmount}
        className={buttonDisabledClassName}
      >
        Give Now
      </button>
    );
  };

  export default RenderGiveNowButton;