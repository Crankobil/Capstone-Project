import { Row, Col, Form, Button } from "react-bootstrap";




export const Login = ({handleOnChange, handleOnSubmit, formSwitcher, email, password}) => {
 
  return (
    <div   className="formContainer ">
        <Row >
            <Col >
            <h1 className="formTitle">Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    value = {email}
                    onChange= {handleOnChange}
                    placeholder="Enter email"
                    required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    value = {password}
                    onChange= {handleOnChange}
                    placeholder="Enter password"
                    required
                    />
                </Form.Group>
                <Button className="registerButton" type="submit">Login</Button>
            </Form>
            </Col>
        </Row>
        <Row >
            <Col className="mt-3">
            <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password?</a>
            </Col>
        </Row>
    </div>
  );
};


