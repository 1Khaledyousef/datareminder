import React from 'react'
 
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

    export function NotFound() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>لا يوجد لديك مواعيد اليوم</Alert.Heading>
            <p>
ابدا ميعاد !
            </p>
        </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
 
 
    }

    export default NotFound;