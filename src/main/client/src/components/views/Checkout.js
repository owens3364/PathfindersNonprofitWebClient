import React, { Component } from 'react';
//import {StripeProvider, Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default class Checkout extends Component {
  render() {
    return (
      /*
            <StripeProvider apiKey="sk_test_aR85IeupAASNRsLKtvTFnysM">
                <Elements>
                */
      <CheckoutForm />
      /*
                </Elements>
            </StripeProvider>
            */
    );
  }
}
