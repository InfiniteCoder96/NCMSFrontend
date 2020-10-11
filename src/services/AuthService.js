import axios from "axios";

const AUTH_BASE_API = process.env.REACT_APP_BASE_API_URL + "/auth/login";

class AuthService {
  async signin(userData) {
    
    var data = JSON.stringify({
      username: userData.username,
      password: userData.password,
    });

    var config = {
      method: "post",
      url: AUTH_BASE_API + "?command=LOGIN",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config);
  }

  async signup(userData) {
    
    var data = JSON.stringify({
      username: userData.username,
      password: userData.password,
      name: userData.name,
      role: ""
    });

    var config = {
      method: "post",
      url: AUTH_BASE_API + "?command=REGISTER",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config);
  }

  async isAuthenticated(){
    if(localStorage.getItem("accessToken")){
      return true;
    }
    else{
      return false;
    }
  }
}

export default new AuthService();
