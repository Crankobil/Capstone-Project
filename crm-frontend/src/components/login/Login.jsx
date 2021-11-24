import { Container, Row, Col, Form, Button } from "react-bootstrap";





const Login = () => {
 
  return (
    <div   className="formContainer ">
        <Row >
            <Col >
            <h1 className="formTitle">Client Login</h1>
            <hr />
            <Form >
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
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
            <a href="#!">Forgotten Password?</a>
            </Col>
        </Row>
    </div>
  );
};

export default Login;
