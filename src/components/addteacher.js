import React, { useContext, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Appprovider';
import BaseApp from './base'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Addteacher() {

    const [state, dispatch] = useContext(UserContext);

    const history = useHistory();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [experience, setExperience] = useState();
    const [subject, setSubject] = useState("");
    const [classn, setClassn] = useState("");


    const addNewUser = async (e) => {

       e.preventDefault();


        
       const newTeacher = {
                id:id,
                name:name,
                class: classn,
                experience:experience,
                subject:subject
            }
        


        try {
            const response = await fetch(`https://64100384864814e5b644bb1b.mockapi.io/Users`, {
                method: 'POST',
                body: JSON.stringify(newTeacher),
                headers: {
                    "Content-Type": "application/json"
                }});
                const data = await response.json();
                dispatch({type:"add-user" ,payload:data})
                history.push(`/teachers`)


        }
        catch (error) { console.log("ERROR,error"); }
    }




return (
    <BaseApp>
        <Container className='jusify-content-centre mt-2'>

            <h2>ADD TEACHER DETAILS</h2>
        </Container>
        <Container className='mt-5 p-2'>
            <Card>
                <div>
                    <input
                        className='m-3 p-2'
                        placeholder="id"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <br />
                    <input
                        className='m-3 p-2'
                        placeholder="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br />
                    <input
                        className='m-3 p-2'
                        placeholder="Subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                    />
                    <br />
                    <input
                        className='m-3 p-2'
                        placeholder="experience"
                        value={experience}
                        onChange={(event) => setExperience(event.target.value)}
                    />
                    <br />
                    <input
                        className='m-3 p-2'
                        placeholder="class"
                        value={classn}
                        onChange={(event) => setClassn(event.target.value)}
                    />
                    <br />
                    <Button
                        className='m-3 p-2'
                        variant='success'
                        onClick={addNewUser}
                    >Add
                    </Button>

                </div>

            </Card>

        </Container>
    </BaseApp>
)

}
