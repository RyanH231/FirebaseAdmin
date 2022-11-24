 import React, {useState} from 'react'
 import {useNavigate} from "react-router-dom"
 import {Card, Button, Alert} from 'react-bootstrap';
 import { UseAuth } from '../contexts/authcontext';

 export default function Dashboard() {
    const {logout} = UseAuth();
    const {currentUser} = UseAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function HandleLogout()
    {
        setError('');
        try{
            await logout();
            navigate('/login');
        }
        catch{
            setError('Could not log out.');
        }
    }
   return (
     <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong> Email: </strong> {currentUser.email};
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2 mb-2'>
                <Button variant="link" onClick={HandleLogout}> Logout? </Button>
        </div>
     </>
   )
 }
 