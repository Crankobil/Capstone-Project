import {Form, Col, Row} from "react-bootstrap"

export const SearchForm = ({handleOnChange, str}) => {
    return (
<div>
<Form>
    <Form.Group as={Row}>
        <Form.Label column sm="3">
Search:{" "}
        </Form.Label>
        <Col sm="9">
        <Form.Control
        name="searchString"
        onChange={handleOnChange}
        value={str}
        placeholder="Search..."
        />
        </Col>
        
    </Form.Group>
</Form>
</div>
    )
}