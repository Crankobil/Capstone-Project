
import { Form, Button } from "react-bootstrap"

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
    

    return (
        <Form>
            <Form.Label>Reply</Form.Label>
            
            <Form.Control
            placeholder = "Message..."
            value = {msg}
            onChange = {handleOnChange}
            as = "textarea"
            row="5"
            name="detail"
            />
            <Form.Text>Please reply your message here or update the ticket </Form.Text>
            <div className="text-end mt-3 mb-3"><Button>Reply</Button></div>
        </Form>
    )
}