import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";

import MainComponent from './MainComponent'
import DashboardComponent from './DashboardComponent'

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
                        Home
                    </Navbar.Brand>
                    <Navbar.Brand href="/main" style={fontStyle}>
                        Main
                    </Navbar.Brand>
                    <Navbar.Brand href="/dashboard" style={fontStyle}>
                        Dashboard
                    </Navbar.Brand>
                </Navbar>

                <Route path="/main" component={MainComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
            </Router>
        )
    }
}

export default TopMenuComponent;