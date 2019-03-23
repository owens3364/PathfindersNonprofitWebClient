import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class InformationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false
    };
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    if (!event.currentTarget.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    return (
      <Form noValidate validated={this.state} onSubmit={e => this.submit(e)}>
        <Form.Group controlId="name">
          <Form.Label>Full Name / Organization</Form.Label>
          <Form.Control required type="text" placeholder="John Doe" />
          <Form.Text className="text-muted">
            We'll never share your information with any other entities
          </Form.Text>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid name / organization.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="addr1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="12345 Artificial Dr"
          />
          <Form.Text className="text-muted">
            We'll never share your information with any other entities
          </Form.Text>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="addr2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control type="text" placeholder="Apt. 27" />
          <Form.Text className="text-muted">
            We'll never share your information with any other entities
          </Form.Text>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control required type="text" placeholder="City" />
          <Form.Text className="text-muted">
            We'll never share your information with any other entities
          </Form.Text>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control required type="text" placeholder="State" />
          <Form.Text className="text-muted">
            We'll never share your information with any other entities
          </Form.Text>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Zip / Postal Code</Form.Label>
          <Form.Control required type="text" placeholder="12345" />
          <Form.Text className="text-muted">
            We'll never share your information with any other entities
          </Form.Text>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid zip / postal code.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="example@domain.ext"
          />
          <Form.Text className="text-muted">
            We'll never share your information with any other entities
          </Form.Text>
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="contactAllowed">
          <Form.Check
            type="checkbox"
            checked="true"
            label="Receive updates from donation recipients throughout the season"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
