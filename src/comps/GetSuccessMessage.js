const GetSuccessMessage = (props) => {
    const { enteredAmount, successMessage } = props;

    let userEnteredAmount =
      enteredAmount.toString().length >= 4
        ? enteredAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : enteredAmount;
    let success_message = successMessage
      ? "Successfully sent $" + userEnteredAmount
      : "";

    return success_message;
  };

  export default GetSuccessMessage;