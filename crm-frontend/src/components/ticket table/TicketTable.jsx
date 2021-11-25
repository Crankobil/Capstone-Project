import {Table } from 'react-bootstrap'

const TicketTable = ({sampleData}) => {
    return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Subject</th>
      <th>Status</th>
      <th>Opened Date</th>
    </tr>
  </thead>
  <tbody>
      {sampleData.length ? (sampleData.map(ticket => 
      (<tr key={ticket.id}>
      <td>{ticket.id}</td>
      <td>{ticket.subject}</td>
      <td>{ticket.status}</td>
      <td>{ticket.addedAt}</td>
    </tr>
    ))
    ):(
        <tr>
        <td colSpan="4" className="text-center">No ticket to show {" "}</td>
      </tr>
    )}
    
  </tbody>
</Table>
    )
}

export default TicketTable