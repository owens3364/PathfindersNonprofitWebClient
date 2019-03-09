import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Row, Col} from 'react-bootstrap'
import {IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoInstagram, IoLogoTwitter} from 'react-icons/io'
import '../stylesheets/navbar.css'

export default class Footer extends Component {
    render() {
        return (
            <Navbar fixed="bottom" sticky="bottom" className={"footer"} variant="dark" expand="lg">
                <Row>
                    <Col>
                        <Row>
                            <Navbar.Brand>Connect With Us!</Navbar.Brand>
                        </Row>
                        <Row>
                            <Navbar.Brand href="https://www.facebook.com/path.finders.5836" target="_blank">
                                <IoLogoFacebook/>
                            </Navbar.Brand>
                            <Navbar.Brand href="https://github.com/owens3364/" target="_blank">
                                <IoLogoGithub/>
                             </Navbar.Brand>
                            <Navbar.Brand href="mailto:pathfinders13497@gmail.com">
                                <IoLogoGoogle/>
                            </Navbar.Brand>
                            <Navbar.Brand href="https://www.instagram.com/pathfinders13497/" target="_blank">
                                <IoLogoInstagram/>
                            </Navbar.Brand>
                            <Navbar.Brand href="https://twitter.com/pathfinder13497/" target="_blank">
                                <IoLogoTwitter/>
                            </Navbar.Brand>
                        </Row>
                    </Col>
                </Row>
            </Navbar>
        );
    }
}