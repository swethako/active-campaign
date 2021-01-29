const GetFailureMessage = (props) => {
    const { enteredAmount } = props;
    let failureMessage = "Please enter $5 or more than $5";
  
    return enteredAmount >= 5 ? "" : failureMessage;
  };
  

  export default GetFailureMessage