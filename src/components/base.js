import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from '../Appprovider';



export default function BaseApp({children}) {



    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand
                        href="/"
                    >Admin</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/teachers">Teachers</Nav.Link>
                        <Nav.Link href="/students">Students</Nav.Link>
                        <Nav.Link  href="/addteacher">Add Teacher</Nav.Link>
                        <Nav.Link href="/addstudent">Add Students</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <div className="children">
               

                {children}
                
               
            </div>
        </div>
    );



}
