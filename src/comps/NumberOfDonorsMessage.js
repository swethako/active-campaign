import React from "react";

const NumberOfDonorsMessage = (props) => {
    const { peopleCount } = props;
    const numberOfDonorsCount = peopleCount <= 1 ? "donor" : "donors";

    return (
      <div className="number-of-people-block">
        Join the <span className="number-of-people-count">{peopleCount}</span>{" "}
        other {numberOfDonorsCount} who have already supported this project.
      </div>
    );
  };

  export default NumberOfDonorsMessage;