import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';


const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fas fa-user"></i>
                                    Sign in
                                </Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};

export default Header

