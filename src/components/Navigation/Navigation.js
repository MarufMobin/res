import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.png';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="cust-header" >
            <Container>
                <Navbar variant="dark" >
                    <Navbar.Brand href="#home">
                        <img  className="custom-img" src={img} style={{marginBottom:"10px"}}/> <span className="logo">Zulzana</span>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink  to="/home" className="coustom-header" >
                            Home
                        </NavLink>
                    
                        <NavLink to="/services" className="coustom-header"> Service</NavLink>
                    
                        <NavLink to="/about" className="coustom-header">
                                About
                        </NavLink>
                    
                        <NavLink to="/contact"  className="coustom-header">
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    );
};

export default Navigation;