import React, { useState } from "react";
import { css, cx } from 'emotion'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Label,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "reactstrap";
import { FaTimes } from 'react-icons/fa';
import { FacebookLoginButton } from "react-social-login-buttons";
import ClipLoader from "react-spinners/ClipLoader";



function RegisterForm(props) {
  const closeModal = () => props.handleRegisterModal();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleFormSubmit = () => {
    setLoading(true);
    const userData = {
      name: name,
      username: username,
      password: password,
    };
    props.handleRegister(userData);
  }

  const handleLoginModal = () => {
    closeModal();
    props.handleLoginModal();
  }
  

  return (
    <>
      <Card body inverse color="success" style={{padding:'0'}}>
        <CardHeader>
        Login
        <div
            className="float-right"
            onClick={closeModal}
            href="#"
            style={{cursor:'pointer'}}
          >
          <FaTimes />
          </div>
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" onChange={(e) => handleNameChange(e)}/>
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input type="text" name="username" onChange={(e) => handleUsernameChange(e)}/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="password" onChange={(e) => handlePasswordChange(e)}/>
          </FormGroup>
        </CardBody>
        <CardFooter>
        <Button className="btn-md btn-info btn-block" onClick={handleFormSubmit}>
        <ClipLoader color={"white"} loading={loading} size={15}/> {loading ? 'Authenticating...' : 'Submit'}
          </Button>
          <h6 className="text-center">- OR -</h6>
          <Button className="btn-md btn-danger btn-block" type="button" onClick={handleLoginModal}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default RegisterForm;
