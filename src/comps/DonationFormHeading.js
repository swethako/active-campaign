import React from "react";

// PLEASE UNCOMMENT THIS CODE TO SEE THE EXPIRY PAGE.
/*const DonationFormHeading = (props) => {
    const { numberOfExpiryDays } = props;
    let daysText = "";
    let pageExpirationText = "";

    switch (numberOfExpiryDays) {
      case 4: {
        daysText = "four";
        break;
      }
      case 3: {
        daysText = "Three";
        break;
      }
      case 2: {
        daysText = "two";
        break;
      }
      case 1: {
        daysText = "one";
        break;
      }
      default: {
        pageExpirationText = "This page has expired.";
        break;
      }
    }

    let notExpiryDayHeading = (
      <span>
        Only {daysText}{" "}
        {numberOfExpiryDays <= 1 ? <span>day</span> : <span>days</span>} left to
        fund this project
      </span>
    );

    let expiryDayHeading = pageExpirationText;

    return (
      <h1 className="donation-form-heading">
        <span>
          {!(numberOfExpiryDays === 0) ? notExpiryDayHeading : expiryDayHeading}
        </span>
      </h1>
    );
};*/

// PLEASE COMMENT THIS CODE TO SEE THE EXPIRY PAGE.
const DonationFormHeading = () => {
  return (
    <h1 className="donation-form-heading">
      <span>Only four days left to fund this project</span>
    </h1>
  );
};

export default DonationFormHeading;
