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



function LoginForm(props) {
  const closeModal = () => props.handleLoginModal();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleFormSubmit = () => {
    setLoading(true);
    const userData = {
      username: username,
      password: password
    };
  
    props.handleLogin(userData);
  }

  const handleRegisterModal = () => {
    closeModal();
    props.handleRegisterModal();
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
            <Label>Username</Label>
            <Input type="text" name="username" onChange={(e) => handleUsernameChange(e)}/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="text" name="password" onChange={(e) => handlePasswordChange(e)}/>
          </FormGroup>
        </CardBody>
        <CardFooter>
        <Button className="btn-md btn-info btn-block" onClick={handleFormSubmit}>
        <ClipLoader color={"white"} loading={loading} size={15}/> {loading ? 'Authenticating...' : 'Submit'}
          </Button>
          <h6 className="text-center">- OR -</h6>
          <Button className="btn-md btn-danger btn-block" type="button" onClick={handleRegisterModal}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default LoginForm;
