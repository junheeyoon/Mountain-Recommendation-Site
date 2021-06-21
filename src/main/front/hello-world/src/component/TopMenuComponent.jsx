import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";

import MainComponent from './MainComponent'
import DashboardComponent from './DashboardComponent'
import LoginComponent from './LoginComponent'
import SignupComponent from './SignupComponent'
import logo from '../logo.svg';
const fontStyle = {
    fontSize: "300%",
};
class TopMenuComponent extends Component {
    render() {
        return (
            <Router>
                <Navbar
                    bg="dark"
                    variant="dark"
                    className="mb-4" >
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/main" style={fontStyle}>
                        Main
                    </Navbar.Brand>
                    <Navbar.Brand href="/dashboard" style={fontStyle}>
                        Dashboard
                    </Navbar.Brand>
                    <Navbar.Brand href="/login" style={fontStyle}>
                        Login
                    </Navbar.Brand>
                    <Navbar.Brand href="/signup" style={fontStyle}>
                        SignUp
                    </Navbar.Brand>
                </Navbar>

                <Route path="/main" component={MainComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/signup" component={SignupComponent} />
            </Router>
        )
    }
}

export default TopMenuComponent;