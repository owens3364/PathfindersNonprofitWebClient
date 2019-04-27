// @flow

import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
//import ReactGA from 'react-ga';

export default class InformationForm extends Component {
  componentDidMount() {
    // TODO: Log ReactGA stuff here
  }

  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      name: '',
      addr1: '',
      addr2: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      phone: '+1 ',
      contactAllowed: true,

      nameValid: false,
      addr1Valid: false,
      addr2Valid: true,
      cityValid: false,
      stateValid: false,
      zipValid: false,
      emailValid: false,
      phoneValid: true,

      formChanged: false,
      formValid: false
    };

    this.submit = this.submit.bind(this);
    this.updateTabs = this.updateTabs.bind(this);
    this.formValid = this.formValid.bind(this);

    this.handleName = this.handleName.bind(this);
    this.handleAddr1 = this.handleAddr1.bind(this);
    this.handleAddr2 = this.handleAddr2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.validateGeneric = this.validateGeneric.bind(this);
    this.validateState = this.validateState.bind(this);
    this.validateZip = this.validateZip.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePhone = this.validatePhone.bind(this);

    this.stateForInput = this.stateForInput.bind(this);
    this.fullToAbbr = this.fullToAbbr.bind(this);
  }

  submit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.state.validated) {
      this.setState({ validated: true }, () => this.updateTabs(true));
    } else {
      this.updateTabs(true);
    }
  }

  updateTabs(fromSubmit) {
    this.setState({ formValid: this.formValid() }, () => {
      if (this.state.validated) {
        if (this.state.formChanged) {
          if (this.state.formValid) {
            this.props.enablePayment(
              fromSubmit ? this.props.advanceToFront : null
            );
          } else {
            this.props.disablePayment();
            this.props.disableConfirmation();
          }
        }
      }
    });
    this.props.setData({
      name: this.state.name,
      addr1: this.state.addr1,
      addr2: this.state.addr2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      phone: this.state.phone,
      amount: this.props.getData().amount
    });
  }

  formValid() {
    return (
      this.state.nameValid &&
      this.state.addr1Valid &&
      this.state.addr2Valid &&
      this.state.cityValid &&
      this.state.stateValid &&
      this.state.zipValid &&
      this.state.emailValid &&
      this.state.phoneValid
    );
  }

  handleName(name) {
    if (this.state.name !== name) {
      this.setState(
        {
          formChanged: true,
          name: name.target.value,
          nameValid: this.validateGeneric(name.target.value)
        },
        () => this.updateTabs(false)
      );
    }
  }

  handleAddr1(addr1) {
    if (this.state.addr1 !== addr1) {
      this.setState(
        {
          formChanged: true,
          addr1: addr1.target.value,
          addr1Valid: this.validateGeneric(addr1.target.value)
        },
        () => this.updateTabs(false)
      );
    }
  }

  handleAddr2(addr2) {
    if (this.state.addr2 !== addr2) {
      this.setState(
        {
          formChanged: true,
          addr2: addr2.target.value,
          addr2Valid: this.validateGeneric(addr2.target.value)
        },
        () => this.updateTabs(false)
      );
    }
  }

  handleCity(city) {
    if (this.state.city !== city) {
      if (!/\d/.test(city.target.value)) {
        this.setState(
          {
            formChanged: true,
            city: city.target.value,
            cityValid: this.validateGeneric(city.target.value)
          },
          () => this.updateTabs(false)
        );
      }
    }
  }

  handleState(state) {
    if (this.state.state !== state) {
      if (!/\d/.test(state.target.value)) {
        if (state.target.value.length < 24) {
          this.setState(
            {
              formChanged: true,
              state: state.target.value,
              stateValid: this.validateState(state.target.value)
            },
            () => this.updateTabs(false)
          );
        }
      }
    }
  }

  handleZip(zip) {
    if (this.state.zip !== zip) {
      if (zip.target.value.length < 6) {
        if (!isNaN(zip.target.value)) {
          this.setState(
            {
              formChanged: true,
              zip: zip.target.value,
              zipValid: this.validateZip(zip.target.value)
            },
            () => this.updateTabs(false)
          );
        }
      }
    }
  }

  handleEmail(email) {
    if (this.state.email !== email) {
      this.setState(
        {
          formChanged: true,
          email: email.target.value,
          emailValid: this.validateEmail(email.target.value)
        },
        () => this.updateTabs(false)
      );
    }
  }

  handlePhone(phone) {
    if (this.state.phone !== phone) {
      let value = phone.target.value;
      if (value.length > 2 && value.length < 20) {
        this.setState(
          {
            formChanged: true,
            phone: value,
            phoneValid: this.validatePhone(phone.target.value)
          },
          () => this.updateTabs(false)
        );
      }
    }
  }

  handleCheck(contactAllowed) {
    if (this.state.contactAllowed !== contactAllowed) {
      this.setState({ contactAllowed: contactAllowed.target.value });
    }
  }

  validateGeneric(generic) {
    let valid = generic.length > 0 && isNaN(generic);
    return valid;
  }

  validateState(state) {
    let valid = !(this.stateForInput(state) == null);
    return valid;
  }

  validateZip(zip) {
    let valid = zip.length === 5 && !isNaN(zip);
    return valid;
  }

  validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = emailRegex.test(email.toLowerCase());
    return valid;
  }

  validatePhone(phone) {
    return true;
    /*
    let valid = phone.length === 19;
    return valid;
    */
  }

  render() {
    return (
      <Form
        noValidate
        validated={this.state.validated}
        onSubmit={e => this.submit(e)}
      >
        <Form.Row>
          <Form.Group controlId="name">
            <Form.Label>Full Name / Organization</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="John Doe"
              value={this.state.name}
              onChange={e => this.handleName(e)}
              isValid={this.state.validated ? this.state.nameValid : null}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid name / organization.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="addr1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="12345 Artificial Dr"
              value={this.state.addr1}
              onChange={e => this.handleAddr1(e)}
              isValid={this.state.validated ? this.state.addr1Valid : null}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          &nbsp;
          <Form.Group controlId="addr2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apt. 27"
              value={this.state.addr2}
              onChange={e => this.handleAddr2(e)}
              isValid={this.state.validated ? this.state.addr2Valid : null}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={e => this.handleCity(e)}
              isValid={this.state.validated ? this.state.cityValid : null}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          &nbsp;
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="State"
              value={this.state.state}
              onChange={e => this.handleState(e)}
              isValid={this.state.validated ? this.state.stateValid : null}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          &nbsp;
          <Form.Group controlId="zip">
            <Form.Label>Zip / Postal Code</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="12345"
              value={this.state.zip}
              onChange={e => this.handleZip(e)}
              isValid={this.state.validated ? this.state.zipValid : null}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid zip / postal code.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="example@domain.ext"
              value={this.state.email}
              onChange={e => this.handleEmail(e)}
              isValid={this.state.validated ? this.state.emailValid : null}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          &nbsp;
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="+1 (123) 456 - 7890"
              value={this.state.phone}
              onChange={e => this.handlePhone(e)}
              isValid={this.state.validated ? this.state.phoneValid : null}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="contactAllowed">
            <Form.Check
              type="checkbox"
              label="Receive updates from donation recipients throughout the season"
              checked={this.state.contactAllowed}
              onChange={e => this.handleCheck(e)}
              isValid={this.state.validated ? true : null}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button type="submit">Submit</Button>
        </Form.Row>
      </Form>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    let nextStateImportant = [
      nextState.validated,
      nextState.name,
      nextState.addr1,
      nextState.addr2,
      nextState.city,
      nextState.state,
      nextState.zip,
      nextState.email,
      nextState.phone,
      nextState.contactAllowed,
      nextState.nameValid,
      nextState.addr1Valid,
      nextState.addr2Valid,
      nextState.cityValid,
      nextState.stateValid,
      nextState.zipValid,
      nextState.emailValid,
      nextState.phoneValid
    ];
    let thisStateImportant = [
      this.state.validated,
      this.state.name,
      this.state.addr1,
      this.state.addr2,
      this.state.city,
      this.state.state,
      this.state.zip,
      this.state.email,
      this.state.phone,
      this.state.contactAllowed,
      this.state.nameValid,
      this.state.addr1Valid,
      this.state.addr2Valid,
      this.state.cityValid,
      this.state.stateValid,
      this.state.zipValid,
      this.state.emailValid,
      this.state.phoneValid
    ];
    return nextStateImportant !== thisStateImportant;
  }

  stateForInput(input) {
    if (!(input == null)) {
      let casedInput = input.trim().toUpperCase();
      let statesFullPos = this.statesFull.indexOf(casedInput);
      if (!(statesFullPos === -1)) {
        return this.fullToAbbr(this.statesFull[statesFullPos]);
      }

      let statesAbbrPos = this.statesAbbr.indexOf(casedInput);
      if (!(statesAbbrPos === -1)) {
        return this.statesAbbr[statesAbbrPos];
      }
    }
    return null;
  }

  fullToAbbr(full) {
    let index = this.statesFull.indexOf(full);
    if (index > -1) {
      if (index < 50) {
        return this.statesAbbr[index];
      }
      if (49 < index && index < 53) {
        return this.statesAbbr[51];
      }
      if (52 < index && index < 55) {
        return this.statesAbbr[50];
      }
      if (index === 55) {
        return this.statesAbbr[52];
      }
      if (55 < index && index < 60) {
        return this.statesAbbr[53];
      }
      if (index === 60) {
        return this.statesAbbr[54];
      }
      if (60 < index && index < 63) {
        return this.Abbr[55];
      }
    }
    return null;
  }

  statesFull = [
    'ALABAMA',
    'ALASKA',
    'ARIZONA',
    'ARKANSAS',
    'CALIFORNIA',
    'COLORADO',
    'CONNECTICUT',
    'DELAWARE',
    'FLORIDA',
    'GEORGIA',
    'HAWAII',
    'IDAHO',
    'ILLINOIS',
    'INDIANA',
    'IOWA',
    'KANSAS',
    'KENTUCKY',
    'LOUISIANA',
    'MAINE',
    'MARYLAND',
    'MASSACHUSETTS',
    'MICHIGAN',
    'MINNESOTA',
    'MISSISSIPPI',
    'MISSOURI',
    'MONTANA',
    'NEBRASKA',
    'NEVADA',
    'NEW HAMPSHIRE',
    'NEW JERSEY',
    'NEW MEXICO',
    'NEW YORK',
    'NORTH CAROLINA',
    'NORTH DAKOTA',
    'OHIO',
    'OKLAHOMA',
    'OREGON',
    'PENNSYLVANIA',
    'RHODE ISLAND',
    'SOUTH CAROLINA',
    'SOUTH DAKOTA',
    'TENNESSEE',
    'TEXAS',
    'UTAH',
    'VERMONT',
    'VIRGINIA',
    'WASHINGTON',
    'WEST VIRGINIA',
    'WISCONSIN',
    'WYOMING',
    'WASHINGTON DC',
    'WASHINGTON D.C.',
    'DISTRICT OF COLUMBIA',
    'AMERICAN SAMOA',
    'SAMOA',
    'GUAM',
    'NORTHERN MARIANA ISLANDS',
    'NORTHERN MARIANA',
    'MARIANA ISLANDS',
    'MARIANA',
    'PUERTO RICO',
    'VIRGIN ISLANDS',
    'VIRGIN'
  ];

  statesAbbr = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
    'AS',
    'DC',
    'GU',
    'MP',
    'PR',
    'VI'
  ];
}
