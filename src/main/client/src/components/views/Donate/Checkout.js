// @flow

import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null
    };
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({
        stripe: window.Stripe('pk_test_4H7HyDyMtBk6EAW0aZstFfIn')
      });
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        this.setState({
          stripe: window.Stripe('pk_test_4H7HyDyMtBk6EAW0aZstFfIn')
        });
      });
    }
  }

  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
    );
  }
}
