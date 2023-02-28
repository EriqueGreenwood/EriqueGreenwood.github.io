import '../index.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavbarHead() {
    
    return (
        <Navbar bg="dark" variant='dark' sticky='top'>
            <Container fluid>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#aboutMe'>About Me</Nav.Link>
                        <Nav.Link href='#skills'>Skills and Tech</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#contactMe'>Contact Me</Nav.Link>
                   </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarHead