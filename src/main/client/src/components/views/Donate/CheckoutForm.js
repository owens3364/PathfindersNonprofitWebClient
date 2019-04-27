// @flow

import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { Tabs, Tab } from 'react-bootstrap';
import InformationForm from './InformationForm';
import PaymentForm from './PaymentForm';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'information',
      paymentDisabled: true,
      confirmationDisabled: true,
      publicData: {
        name: '',
        addr1: '',
        addr2: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phone: '',
        amount: ''
      }
    };

    this.onSelect = this.onSelect.bind(this);
  }

  paymentFormPublicDataChangedCallback = () => {};

  onSelect(key) {
    this.setState({ activeKey: key });
  }

  advanceToFront() {
    if (!this.state.confirmationDisabled) {
      this.onSelect('confirmation');
    } else if (!this.state.paymentDisabled) {
      this.onSelect('payment');
    } else {
      this.onSelect('information');
    }
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeKey} onSelect={this.onSelect}>
        <Tab eventKey="information" title="Contact Information">
          <br />
          <InformationForm
            disablePayment={() => this.setState({ paymentDisabled: true })}
            enablePayment={callback =>
              this.setState({ paymentDisabled: false }, callback)
            }
            disableConfirmation={() =>
              this.setState({ confirmationDisabled: true })
            }
            enableConfirmation={callback =>
              this.setState({ confirmationDisabled: false }, callback)
            }
            getData={() => this.state.publicData}
            setData={data => this.setState({ publicData: data })}
            advanceToFront={() => this.advanceToFront()}
          />
        </Tab>
        <Tab
          eventKey="payment"
          title="Payment"
          disabled={this.state.paymentDisabled}
        >
          <br />
          <PaymentForm
            disableConfirmation={() =>
              this.setState({ confirmationDisabled: true })
            }
            enableConfirmation={() =>
              this.setState({ confirmationDisabled: false })
            }
            getData={() => this.state.publicData}
            setData={data => this.setState({ publicData: data })}
            setPaymentFormPublicDataChangedCallback={callback =>
              (this.paymentFormPublicDataChangedCallback = callback)
            }
            advanceToFront={() => this.advanceToFront()}
          />
        </Tab>
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
