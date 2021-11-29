
import { Col, Container, Row, Button } from "react-bootstrap"
import MyBreadCrumb from "../../components/breadcrumb/MyBreadCrumb"
import sampleData from "../../assets/data/sample-data.json"
import { MessageHistory } from "../../components/message history/MessageHistory"
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket"
import { useEffect, useState } from "react"

const ticket = sampleData[0]
export const Ticket = () => {
const [message, setMessage] = useState("")

useEffect(() => {}, [message])

const handleOnChange = (e) => {
       setMessage(e.target.value)
}

const handleOnSubmit = () => {

}

return (
        <Container>
            <Row>
                <Col>
                <MyBreadCrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                <div className="subject"> subject : {ticket.subject}</div>
                <div className="date"> date : {ticket.addedAt}</div>
                <div className="status"> status : {ticket.status}</div>
                </Col>
                <Col className="text-end">
                <Button  variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>

            <hr/>
            <Row className="mt-4">
                <Col>
                <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>

        </Container>
    )
}