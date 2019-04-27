// @flow

import React, { Component } from 'react';
import { Form, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import {
  CardElement,
  IbanElement,
  PaymentRequestButtonElement,
  injectStripe
} from 'react-stripe-elements';

const teamInvalidError = 'Please enter a valid team.';
const amountInvalidError = 'Please enter a valid amount.';
const paymentTypeInvalidError = 'Please enter a valid payment type.';

class PaymentForm extends Component {
  paymentRequestObj = null;

  componentDidMount() {
    // TODO: Log ReactGA stuff here
  }

  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      paymentType: 'Payment type',
      paymentValid: false,
      amount: '0',
      amountValid: false,
      team: 'Select team',
      teamValid: false,
      formChanged: false,
      formValid: false,
      error: '',
      canMakePayment: null
    };

    this.submit = this.submit.bind(this);
    this.updateTabs = this.updateTabs.bind(this);
    this.formValid = this.formValid.bind(this);
    this.handleAmount = this.formValid.bind(this);
    this.validateAmount = this.validateAmount.bind(this);
    this.errorFromInputs = this.errorFromInputs.bind(this);
    this.updatePaymentRequestObj = this.updatePaymentRequestObj.bind(this);
    this.genPaymentRequestButton = this.genPaymentRequestButton.bind(this);

    this.props.setPaymentFormPublicDataChangedCallback(() =>
      this.updatePaymentRequestObj()
    );
  }

  submit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.state.validated) {
      this.setState({ validated: true }, () => this.updateTabs());
    } else {
      this.updateTabs();
    }
  }

  updateTabs() {
    this.setState({ formValid: this.formValid() }, () => {
      if (this.state.validated) {
        if (this.state.formChanged) {
          this.state.formValid
            ? this.props.enableConfirmation()
            : this.props.disableConfirmation();
        }
      }
    });
  }

  formValid() {
    return (
      this.state.paymentValid && this.state.amountValid && this.state.teamValid
    );
  }

  handleAmount(amount) {
    if (this.state.amount !== amount.target.value) {
      if (!isNaN(amount.target.value)) {
        let amountValid = this.validateAmount(amount.target.value);
        this.setState(
          {
            formChanged: true,
            amount: amount.target.value,
            amountValid: amountValid
          },
          () => {
            this.setState({ error: this.errorFromInputs() });
            this.updateTabs();
          }
        );
      }
    }
  }

  validateAmount(amount) {
    const amountRegex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
    return amountRegex.test(amount.trim());
  }

  errorFromInputs() {
    if (!this.state.paymentValid) {
      return paymentTypeInvalidError;
    }
    if (!this.state.teamValid) {
      return teamInvalidError;
    }
    if (!this.state.amountValid) {
      return amountInvalidError;
    }
  }

  updatePaymentRequestObj() {
    if (this.paymentRequestObj === null) {
      this.paymentRequestObj = this.props.stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          amount: parseFloat(this.state.amount) * 100,
          label: 'Gracious donation / sponsorship of team ' + this.state.team
        },
        displayItems: [
          {
            amount: parseFloat(this.state.amount) * 100,
            label: 'Gracious donation / sponsorship of team ' + this.state.team
          }
        ],
        requestPayerName: false,
        requestPayerEmail: false,
        requestPayerPhone: true,
        requestShipping: false
      });
    } else {
      this.paymentRequestObj.update({
        country: 'US',
        currency: 'usd',
        total: {
          amount: parseFloat(this.state.amount) * 100,
          label: 'Gracious donation / sponsorship of team ' + this.state.team
        },
        displayItems: [
          {
            amount: parseFloat(this.state.amount) * 100,
            label: 'Gracious donation / sponsorship of team ' + this.state.team
          }
        ],
        requestPayerName: false,
        requestPayerEmail: false,
        requestPayerPhone: true,
        requestShipping: false
      });
    }
  }

  genPaymentRequestButton() {
    this.paymentRequestObj.canMakePayment().then(value => {
      if (!!value !== this.state.canMakePayment) {
        this.setState({
          canMakePayment: !!value
        });
      }
    });
    if (this.state.canMakePayment === null) {
      return <br />;
    }
    if (this.state.canMakePayment === true) {
      return (
        <PaymentRequestButtonElement paymentRequest={this.paymentRequestObj} />
      );
    }
    return <p>There's an issue with this type of payment</p>;
  }

  render() {
    return (
      <div>
        <ButtonGroup className="mr-2">
          <DropdownButton id="paymentType" title={this.state.paymentType}>
            <Dropdown.Item
              onSelect={() =>
                this.setState(
                  {
                    paymentType: 'Credit / Debit',
                    paymentValid: true
                  },
                  () => this.setState({ error: this.errorFromInputs() })
                )
              }
            >
              Credit / Debit
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() =>
                this.setState(
                  {
                    paymentType: 'IBAN',
                    paymentValid: true
                  },
                  () => this.setState({ error: this.errorFromInputs() })
                )
              }
            >
              IBAN
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => {
                this.updatePaymentRequestObj();
                this.setState(
                  {
                    paymentType: 'Apple / Google Pay',
                    paymentValid: true
                  },
                  () => this.setState({ error: this.errorFromInputs() })
                );
              }}
            >
              Apple / Google Pay
            </Dropdown.Item>
          </DropdownButton>
          &nbsp;
          <DropdownButton id="team" title={this.state.team}>
            <Dropdown.Item
              onSelect={() =>
                this.setState(
                  {
                    team: 'FTC Pathfinders 13497',
                    teamValid: true
                  },
                  () => this.setState({ error: this.errorFromInputs() })
                )
              }
            >
              FTC Pathfinders 13497
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() =>
                this.setState(
                  {
                    team: 'FLL Pathfinders 7885',
                    teamValid: true
                  },
                  () => this.setState({ error: this.errorFromInputs() })
                )
              }
            >
              FLL Pathfinders 7885
            </Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
        <br />
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={e => this.submit(e)}
        >
          <Form.Row>
            <Form.Group controlId="amount">
              <Form.Label>Amount (USD)</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="12.34"
                value={this.state.amount}
                onChange={e => this.handleAmount(e)}
                isValid={
                  this.state.validated
                    ? this.state.amountValid &&
                      this.state.paymentValid &&
                      this.state.teamValid
                    : null
                }
              />
              <Form.Control.Feedback type="invalid">
                {this.state.error}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
        </Form>
        {this.state.paymentType === 'Credit / Debit' ? (
          <CardElement />
        ) : this.state.paymentType === 'IBAN' ? (
          <IbanElement />
        ) : this.state.paymentType === 'Apple / Google Pay' ? (
          this.genPaymentRequestButton()
        ) : null}
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    let nextStateImportant = [
      nextState.validated,
      nextState.amount,
      nextState.paymentType,
      nextState.amountValid,
      nextState.paymentValid,
      nextState.team,
      nextState.teamValid,
      nextState.error,
      nextState.canMakePayment
    ];
    let thisStateImportant = [
      this.state.validated,
      this.state.amount,
      this.state.amountValid,
      this.state.paymentType,
      this.state.paymentValid,
      this.state.team,
      this.state.teamValid,
      this.state.error,
      this.state.canMakePayment
    ];
    return nextStateImportant !== thisStateImportant;
  }
}

export default injectStripe(PaymentForm);
