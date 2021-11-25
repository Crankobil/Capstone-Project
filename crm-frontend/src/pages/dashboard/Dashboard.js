import { Container, Row, Col, Button } from "react-bootstrap"
import TicketTable from "../../components/ticket table/TicketTable"
import sampleData from "../../assets/data/sample-data.json"
import MyBreadcrumb  from "../../components/breadcrumb/MyBreadCrumb"

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col >
<MyBreadcrumb page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
<Button variant="secondary" style={{"font-size":"2rem", padding:"10px 30px"}}> Add new Ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
            <div> Total Tickets: 50</div>
            <div> Pending: 50</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2 mb-2">
            Recently Added tickets
                </Col>
            </Row>
            <hr />

            <Row>
                <Col className="recent-ticket">
            <TicketTable sampleData={sampleData}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard