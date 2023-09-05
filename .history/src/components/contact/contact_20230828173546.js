import React from 'react'
import './contact.css'
import { Button, Form } from 'react-bootstrap'
const Contact = () => {
  return (
    <div className='contact text-center' id='contact'>
      <h3 className=' my-3'>Contact</h3>
       <Form className=' my-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" className='heghit' placeholder="Write your message" />
      </Form.Group>
      <Button variant="primary" className='button' type="submit">
        send message
      </Button>
    </Form>
    </div>
  )
}

export default Contact
