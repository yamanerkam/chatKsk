import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
    const {signup} = useSignup()
    const [email,
        setEmail] = useState('')
    const [password,
        setPassword] = useState('')
    const [passwordAgain,
            setPasswordAgain] = useState('')
    function handleSignup() {
        console.log('fuck')
        signup(email,password,passwordAgain)

    }

    useEffect(()=>{
        console.log(email,password,passwordAgain)
    },[email,password,passwordAgain])

    return (
        <Container
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Card
                style={{
                maxWidth: '400px',
                width: '100%'
            }}>
                <Card.Header as="h5">Sign Up</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter email"/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password Again</Form.Label>
                            <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder="Password"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Password Again:

                            </Form.Label>
                            <Form.Control value={passwordAgain} onChange={(e)=>setPasswordAgain(e.target.value)} required type="password" placeholder="Password again"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Signup
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );

}
