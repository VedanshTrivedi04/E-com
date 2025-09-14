import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const Register = () => {
  const [username, setusername] = useState('')
  const [frist_name, setfrist_name] = useState('')
  const [last_name, setlast_name] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [errors, seterrors] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleregistration = async (e) => {

    e.preventDefault();
    setLoading(true);


    const userdata = {
      username, email, frist_name, last_name, password

    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userdata)
      console.log('response.data==>', response.data)
      console.log('User register successful')
      seterrors({});
      setSuccess(true);



    } catch (error) {
     
      seterrors(error.response.data)
      console.error('registration error', error.response.data)
    }
    finally {
      setLoading(false)
    }


  }

  return (


    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="shadow p-4" style={{ width: "450px", borderRadius: "12px" }}>
        <h3 className="text-center mb-4 text-success">Create an Account</h3>

        <Form onSubmit={handleregistration}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="useraname" placeholder="Enter username" required value={username} onChange={(e) => setusername(e.target.value)} />
            <small>{errors.username && <div className='text-danger '>{errors.username}</div>}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="frist_name" placeholder="Enter first name" required value={frist_name} onChange={(e) => setfrist_name(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="last_name" placeholder="Enter last name" required value={last_name} onChange={(e) => setlast_name(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setemail(e.target.value)} />
            <small>{errors.email && <div className='text-danger '>{errors.email}</div>}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required value={password} onChange={(e) => setpassword(e.target.value)} />
            <small>{errors.password && <div className='text-danger '>{errors.password}</div>}</small>
          </Form.Group>
{loading ? (<div className="d-grid gap-2">
          <Button variant="success" type="submit">
            Please Wait.....
          </Button>

        </div>) : (<div className="d-grid gap-2">
          <Button variant="success" type="submit">
            Register
          </Button>

        </div>)}
        {success && <div><Alert >
          Registerd Successfully !!!
        </Alert></div>}

        </Form>

        

        <p className="text-center mt-3">
          Already have an account? <Link to="/login" className="text-success">Login</Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
