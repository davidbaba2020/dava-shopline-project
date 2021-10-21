import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
    return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={'/'}>Dave-Shopingline</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <NavDropdown title="We'll See" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        <Nav>
                        <Nav.Link href="/"><i className='fas fa-home'></i>Home</Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-shopping-cart'></i>Sign In</Nav.Link>
                        <Nav.Link href="/cart"><i className='fas fa-user '></i>Cart</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
    )
}

export default Header
