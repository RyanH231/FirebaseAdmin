import React, {useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { UseAuth } from '../contexts/authcontext';


export default function Signup() {

    const {signup} = UseAuth();
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function HandleSubmit(e)
    {
        e.preventDefault()
        if(passwordRef.current.value != passwordConfirmRef.current.value)
        {
            setError("Passwords do not match.");
        }
        else
        {
            try{
                setError('');
                setLoading(true);
                navigate('/');
                await signup(emailRef.current.value, passwordRef.current.value);
            }
            catch
            {
                setError("User not added successfully.")
            }
        }
        setLoading(false);
    }
    return (
    <>
        {/* //Container for input */}
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign-Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {/* //Admin input fields */}
                <Form onSubmit={HandleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" 
                            ref={emailRef} required>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                            ref={passwordRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id="passwordConfirmation">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" 
                            ref={passwordConfirmRef} required>
                        </Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" 
                        type='submit'>Submit</Button>

                </Form>
            </Card.Body>
            <div className='w-100 text-center mt-2 mb-2'>
                Have an account? <Link to="/login">Log in!</Link>
            </div>
        </Card>
    </>
  )
}
