import { Container, Row, Col } from "react-bootstrap"
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm"
import MyBreadCrumb from "../../components/breadcrumb/MyBreadCrumb"
import { useEffect, useState } from "react"

const initialFormData = {
    subject:"",
    issueDate: null,
    detail:"",
}

export const AddTicket = () => {
const [formData, setFormData] = useState(initialFormData)
useEffect(() => {}, [formData]);
    
    const handleOnChange = e => {
        const {name, value} = e.target
        setFormData({
            ...formData, 
            [name]: value,
        })
    };

    
    const handleOnSubmit = e => {
        e.preventDefault();

        console.log('Form submit received', formData)
    }

    return (
        <Container>
            <Row>
                <Col>
                <MyBreadCrumb page="New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formData={formData}/>
                </Col>
            </Row>
        </Container>
    )
}