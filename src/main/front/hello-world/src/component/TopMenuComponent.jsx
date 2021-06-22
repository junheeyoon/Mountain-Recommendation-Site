import React, {Component} from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
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
    
    constructor(props) {
        super(props);
        console.log('this is:', this);
        this.state = {
          isModalOpen: false,
        };
    }
    
    openModal = () => {
        console.log('this is:', this);
        this.setState({ isModalOpen: true });
    };
    
    closeModal = () => {
        this.setState({ isModalOpen: false });
    };
    
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand href="/main" style={fontStyle}>
                            Main
                        </Navbar.Brand>
                        <Navbar.Brand href="/dashboard" style={fontStyle}>
                            Dashboard
                        </Navbar.Brand>
                        
                        <Navbar.Brand href="/signup" style={fontStyle}>
                            SignUp
                        </Navbar.Brand>
                    </Nav>
                    <>
                <Button onClick={this.openModal}>Modal</Button>
                <LoginComponent isOpen={this.state.isModalOpen} close={this.closeModal} />
                </>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Route path="/main" component={MainComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
                <Route path="/signup" component={SignupComponent} />

                
            </Router>
            
        )
    }
}

export default TopMenuComponent;