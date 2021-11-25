import {Form, Button, Container, Row, Col} from "react-bootstrap";
import "./AddTicketFormStyle.css";

export const AddTicketForm = ({handleOnSubmit, handleOnChange, formData}) => {
    return (
        <Container >
            
            <Row className="justify-content-center">
                <Col lg={6} >
                <h1 className="formTitle text-center">Add New Ticket</h1>
            <hr />
             <Form autoComplete="off" onSubmit={handleOnSubmit} >
                <Form.Group as={Row} className="mt-4">
                    <Form.Label column sm={3}>Subject</Form.Label>
                   <Col sm={9}>
                   <Form.Control
                    name="subject"
                    value = {formData.subject}
                    minLength = "3"
                    onChange= {handleOnChange}
                    placeholder="Subject"
                    required
                    />
                   </Col>
                    
                </Form.Group>
                <Form.Group as={Row} className="my-4">
                    <Form.Label column sm={3}>
                        Issue Found
                    </Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    type="date"
                    name="date"
                    value = {formData.issueDate}
                    onChange= {handleOnChange} 
                    placeholder="Enter password"
                    required
                    />
                    </Col>
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label>Issue</Form.Label>
                    <Form.Control
                    as ="textarea"
                    name="detail"
                    rows="5"
                    value = {formData.detail}
                    onChange= {handleOnChange} 
                    placeholder="Enter details"
                    required
                    />
                </Form.Group>

                <Button className="ticket-btn container-fluid" type="submit" >Login</Button>
            </Form>

                </Col>
            </Row>
        </Container>
        
    )
}