import { Row, Col, Form, Button } from "react-bootstrap";




export const PasswordReset = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
 
  return (
    <div   className="formContainer ">
        <Row >
            <Col >
            <h1 className="formTitle">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                <Button className="registerButton" type="submit">Reset Password</Button>
            </Form>
            </Col>
        </Row>
        <Row >
            <Col className="mt-3">
            <a href="#!" onClick={()=> formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </div>
  );
};


