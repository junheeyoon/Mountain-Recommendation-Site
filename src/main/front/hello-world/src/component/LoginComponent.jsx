import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";
class LoginComponent extends Component {
    render() {
        return (
            
            <Form>
                
                <h3>Log in</h3>
                <Form.Row>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                </Form.Row>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
            
        )
    }
}

export default LoginComponent