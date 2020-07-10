import React , {useEffect, useState} from "react";
import axios from "axios";

const Login = (props) => {

    const [credentials, setCredentials] = useState({
        username:"",
        password:""
        })

const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    // make a post request to the login endpoint on the server
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        // redirect the user to the app's main logged in page
        props.history.push("/protected");
      })
      .catch(err => console.log({ err }));
  };


    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
}

export default Login;
