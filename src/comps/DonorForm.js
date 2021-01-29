import React from "react";

import DollarSignImage from "./DollarSignImage.js";
import DonationFormHeading from "./DonationFormHeading";
import GetFailureMessage from "./GetFailureMessage";
import GetSuccessMessage from "./GetSuccessMessage";
import NumberOfDonorsMessage from "./NumberOfDonorsMessage";
import RenderGiveNowButton from "./RenderGiveNowButton";
import ToolTipBlock from "./ToolTipBlock";

import "/src/styles/DonorForm.scss";

class DonorForm extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredAmount: 5,
      isExpired: false,
      numberOfExpiryDays: 0,
      peopleCount: 0,
      successMessage: false,
      targetAmount: 5000,
      totalAmount: 0
    };
  }

  // PLEASE UNCOMMENT THIS CODE AND CHANGE THE EXPIRY DATE TO SEE THE EXPIRY PAGE.
  /*componentWillMount() {
    let expiryDate = "2021-12-31T02:43:41.460Z";
    let date = new Date();
    let time = date.getTime();

    if (time < new Date(expiryDate).getTime()) {
      let expiryDay = new Date(expiryDate).getUTCDate();
      let currentDay = new Date(time).getUTCDate();

      let numberOfExpiryDays = expiryDay - currentDay;

      this.setState({
        numberOfExpiryDays
      });
    } else {
      this.setState({
        isExpired: true
      });
    }
  }*/

  componentDidMount() {
    this.numberInput.focus();
  }

  submitDonorEnteredAmount = () => {
    this.setState(prevState => {
      return {
        totalAmount: prevState.totalAmount + Number(prevState.enteredAmount),
        peopleCount: prevState.peopleCount + 1,
        successMessage: true
      };
    });
    setTimeout(
      () =>
        this.setState({
          successMessage: false
        }),
      3000
    );
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      successMessage: false
    });
  };

  getTotalAmount = () => {
    const { targetAmount, totalAmount } = this.state;

    let stillNeedDonationAmount = targetAmount - totalAmount;
    return stillNeedDonationAmount;
  };

  getProgressBarPercentage = () => {
    const { targetAmount, totalAmount } = this.state;

    let getProgressBarPercentage = (totalAmount * 100) / targetAmount;
    return getProgressBarPercentage;
  };

  _handleKeyDown = e => {
    const { enteredAmount } = this.state;

    if (e.key === "Enter") {
      enteredAmount >= 5
        ? this.submitDonorEnteredAmount()
        : this.renderFailureMessage();
    }
  };

  // PLEASE UNCOMMENT THE COMMENTED LINES TO SEE THE EXPIRY PAGE.
  renderInputField = () => {
    const { enteredAmount } = this.state;
    //let disabledOrNot = this.state.numberOfExpiryDays === 0 ? true : false;
    return (
      <input
        min="5"
        type="number"
        value={enteredAmount}
        name="enteredAmount"
        placeholder="Please enter the amount"
        onChange={this.handleChange}
        ref={input => {
          this.numberInput = input;
        }}
        className="input_number_field"
        onKeyDown={this._handleKeyDown}
        //disabled={disabledOrNot}
      />
    );
  };

  renderInputFieldwithDollarSign = () => {
    return (
      <>
        {this.renderInputField()}
        {<DollarSignImage />}
      </>
    );
  };

  renderSuccessMessage = () => {
    const { enteredAmount, successMessage } = this.state;

    return (
      <div className="success_message">
        {
          <GetSuccessMessage
            enteredAmount={enteredAmount}
            successMessage={successMessage}
          />
        }
      </div>
    );
  };

  renderFailureMessage = () => {
    return (
      <div className="failure_message">
        <GetFailureMessage enteredAmount={this.state.enteredAmount} />
      </div>
    );
  };

  renderInputAndButtonBlock = () => {
    const { enteredAmount, numberOfExpiryDays } = this.state;

    return (
      <div>
        <div className="input_and_button_block">
          {this.renderInputFieldwithDollarSign()}
          {
            <RenderGiveNowButton
              enteredAmount={enteredAmount}
              submitDonorEnteredAmount={this.submitDonorEnteredAmount}
              numberOfExpiryDays={numberOfExpiryDays}
            />
          }
        </div>
        <div className="success_and_failure_message">
          {this.renderFailureMessage()}
          {this.renderSuccessMessage()}
        </div>
      </div>
    );
  };

  renderDonationFormContentBlock = () => {
    const { peopleCount, numberOfExpiryDays } = this.state;

    return (
      <div className="donation-form-content">
        {<DonationFormHeading numberOfExpiryDays={numberOfExpiryDays} />}
        {<NumberOfDonorsMessage peopleCount={peopleCount} />}
        {this.renderInputAndButtonBlock()}
      </div>
    );
  };

  renderCompleteDonationForm = () => {
    const { targetAmount } = this.state;

    return (
      <div className="donation-form-block">
        {
          <ToolTipBlock
            targetAmount={targetAmount}
            getTotalAmount={this.getTotalAmount()}
          />
        }
        <progress value={this.getProgressBarPercentage()} max="100"></progress>
        {this.renderDonationFormContentBlock()}
      </div>
    );
  };

  render() {
    return (
      <div className="donation-form">{this.renderCompleteDonationForm()}</div>
    );
  }
}

export default DonorForm;
