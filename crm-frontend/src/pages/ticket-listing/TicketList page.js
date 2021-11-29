
import { useEffect, useState } from "react"
import {Container, Col, Row, Button} from "react-bootstrap"
import MyBreadCrumb from "../../components/breadcrumb/MyBreadCrumb"
import TicketTable from "../../components/ticket table/TicketTable"
import { SearchForm } from "../../components/search from/SearchForm"
import sampleData from "../../assets/data/sample-data.json"


export const TicketList = () => {

const [str, setStr] = useState("");
const [dispTicket, setDispTicket] = useState(sampleData)


useEffect(() => {}, [str, dispTicket]);

const handleOnChange = (e) => {
const {value} = e.target;
console.log(value)
setStr(value);
searchTicket(value);
}

const searchTicket = (sttr) => {

    const displayTickets = sampleData.filter((ticket) => ticket.subject.toLowerCase().includes(sttr.toLowerCase())
    );
 console.log(displayTickets)
    setDispTicket(displayTickets)
}
    return (
<Container>
    <Row>
        <Col>
        <MyBreadCrumb page="Ticket List"/>
        </Col>
    </Row>
    <Row>
        <Col>
        <Button >Add New Ticket</Button>
        </Col>
        <Col className="text-end">
        <SearchForm handleOnChange={handleOnChange} str={str}/>
        </Col>
    </Row>
    <Row className="mt-5">
        <Col>
        <TicketTable sampleData ={dispTicket}/>
        </Col>
    </Row>
</Container>
    )
}