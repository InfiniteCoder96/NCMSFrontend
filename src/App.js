import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import LoginModal from "react-modal";
import RegisterModal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";
import SignUp from "./components/pages/SignUp/SignUp";
import PrivateRoute from "./components/pages/PrivateRoute";
import MgtDashboard from "./components/pages/Dashboard/HospitalDash";
import COVID19Dashboard from "./components/pages/COVID19Dashboard/COVID19Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer.js/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AuthService from "./services/AuthService";
import LoadingOverlay from "react-loading-overlay";
import Sidebar from './components/Sidebar';

function App() {
  const [loginModalState, setLoginModalState] = useState(false);
  const [registerModalState, setRegisterModalState] = useState(false);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    LoginModal.setAppElement('body');
  })
  function handleLoginModal() {
    setLoginModalState(!loginModalState);
  }
  function handleRegisterModal(){
    setRegisterModalState(!registerModalState);
  }
  function handleDashboard(){
    return <Redirect to={"/dashboard"}  />
  }

  function handleLogin(userData) {
    setLoading(true);
    AuthService.signin(userData).then(
      (res) => {
        localStorage.setItem("accessToken", "Bearer " + res.data.message);
        console.log(res.data);
        toast.success("Authenticated Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setisAuthenticated(true);
        this.handleLoginModal();
      },
      (error) => {
        toast.error("Invalid Credentails", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.handleLoginModal();
      }
    );
    
    setLoading(false);
  }

  function handleRegister(userData) {
    setLoading(true);
    AuthService.signup(userData).then(
      (res) => {
        console.log(res.data);
        this.handleRegisterModal();
      },
      (error) => {
        toast.error("Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.handleRegisterModal();
      }
    );
    
    setLoading(false);
  }

  function handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem("accessToken");

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    return <Redirect to={redirectTo}  />
  }

  const customStylesLogin = {
    content: {
      backgroundColor: "#1C2237",
      width: "400px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const customStylesRegister = {
    content: {
      backgroundColor: "#1C2237",
      width: "400px",
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  console.log(loginModalState);
  return (
    <Router>
      <ToastContainer />
      
        <LoginModal isOpen={loginModalState} style={customStylesLogin}>
          <LoginForm handleLoginModal={handleLoginModal} handleRegisterModal={handleRegisterModal} handleLogin={handleLogin} isLoading={loading}/>
        </LoginModal>

        <RegisterModal isOpen={registerModalState} style={customStylesRegister}>
          <RegisterForm handleLoginModal={handleLoginModal} handleRegisterModal={handleRegisterModal} handleRegister={handleRegister} isLoading={loading}/>
        </RegisterModal>
      
      <Navbar loginModalState={setLoginModalState} handleDashboard={handleDashboard}/>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/COVID19-dashboard" component={COVID19Dashboard} />
        <PrivateRoute handleLogout={handleLogout} path="/dashboard" isAuthenticated={isAuthenticated} name="Home" component={MgtDashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
