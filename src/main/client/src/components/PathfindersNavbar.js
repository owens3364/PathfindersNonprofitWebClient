import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {LinkContainer} from 'react-router-bootstrap'
import '../stylesheets/navbar.css'

const pathfindersRoboticsLogo = require('../assets/Pathfinders-Logo.svg')

export default class PathfindersNavbar extends Component {
    render() {
        return (
            <Navbar fixed="top" sticky="top" className={"navbar"} variant="dark" expand="lg">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        <img
                            src={pathfindersRoboticsLogo}
                            width="30"
                            height="30"
                            className="d-inline-block"
                            alt=""
                        />
                        {' Pathfinders Robotics'}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/donate">
                            <Nav.Link>Donate</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/highlights">
                            <Nav.Link>Highlights</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Our Teams" id="basic-nav-dropdown">
                            <LinkContainer to="/teams/13497">
                                <NavDropdown.Item>FTC Pathfinders 13497</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/teams/7885">
                                <NavDropdown.Item>FLL Pathfinders 7885</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/teams/create">
                                <NavDropdown.Item>Create a Team</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="Search" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-light" className="mr-sm-3">Search</Button>
                    </Form>
                    <LinkContainer to="/login">
                        <Button variant="outline-success">Login</Button>
                    </LinkContainer>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}