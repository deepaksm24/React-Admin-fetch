import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useContext, useState } from "react";

import BaseApp from '../components/base';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../Appprovider';
import { useHistory } from "react-router-dom";
import axios from 'axios';





export default function Students() {

    const history = useHistory();

    const [state,dispatch,state1, dispatch1]= useContext(UserContext);

    
   
    const deleteUser = async (idx) => {

        try {

           const response = await axios.delete(`https://64100384864814e5b644bb1b.mockapi.io/students/${idx}`)
           const data = response.data;

            console.log("AfterDelete", data);

            const alterList = state1.user.filter((per) => per.id !== idx);
            dispatch1({ type: "delete-user", payload: alterList })

        }
        catch (error) { console.log("ERROR,error"); }
    }

    
   
    
    return (
        <BaseApp>


        
<Container className='jusify-content-centre mt-2'>

<h2>All Student DETAILS</h2>
   </Container>
            <Container fluid id="teachercontainer">
                <Row className="justify-content-center">

                    {state1.user.map((student,index) => (
                        <Col lg={6} sm={12} md={6}>
                            <Card id="card" >
                                <Card.Header><h1>Student Name: {student.name}</h1></Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    <h4>Class: {student.class}</h4>
                                    <h5>Grade: {student.Grade}</h5>
                                </Card.Text>
                                <Button
                                className=""
                                variant='info'
                                onClick={()=>history.push(`/editstudent/${student.id}`)} 
                                >Edit</Button>
                                <Button
                                className="m-2"
                                variant='secondary'
                                onClick={()=>history.push(`/student/${student.id}`)} 
                                >View</Button>
                                <Button
                                variant="danger"
                                onClick={()=>deleteUser(student.id)}
                                >Delete</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}



                </Row>



            </Container>




        </BaseApp>

    );



}
