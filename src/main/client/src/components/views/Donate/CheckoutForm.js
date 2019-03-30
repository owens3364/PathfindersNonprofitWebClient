// @flow

import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { Tabs, Tab } from 'react-bootstrap';
import InformationForm from './InformationForm';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDisabled: true,
      confirmationDisabled: true
    };
  }

  render() {
    return (
      <Tabs>
        <Tab eventKey="information" title="Contact Information">
          <InformationForm
            disablePayment={() => this.setState({ paymentDisabled: true })}
            enablePayment={() => this.setState({ paymentDisabled: false })}
            disableConfirmation={() =>
              this.setState({ confirmationDisabled: true })
            }
            enableConfirmation={() =>
              this.setState({ confirmationDisabled: false })
            }
          />
        </Tab>
        <Tab
          eventKey="payment"
          title="Payment"
          disabled={this.state.paymentDisabled}
        />
        <Tab
          eventKey="confirmation"
          title="Confirmation"
          disabled={this.state.confirmationDisabled}
        />
      </Tabs>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }
}

export default injectStripe(CheckoutForm);
