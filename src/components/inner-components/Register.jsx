import React from "react";
import { Form, Button } from "react-bootstrap";

const Register = (props) => {
  return (
    <>
      <div className="form-box">
        <h1>
          Get Started and <span>Enjoy !</span>
        </h1>
        <Form>
          <Form.Group controlId="fullname">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button type="submit" className="btn register-btn">
            Sign Up
          </Button>
        </Form>
        <p>
          Already have account ?
          <span onClick={props.functionName}> Login </span>
        </p>
      </div>
    </>
  );
};

export default Register;
