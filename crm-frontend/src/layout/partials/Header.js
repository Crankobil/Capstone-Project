import { Nav, Navbar } from "react-bootstrap"
import logo from "../../assets/img/IMG_White.JPG"
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand>
                <img   src={logo} alt="logo" width="80px" height="80px" style={{'borderRadius':'50%'}}/>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Tickets</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header