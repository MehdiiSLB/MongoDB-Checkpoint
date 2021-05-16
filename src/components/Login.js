import React from "react";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [mail, setmail] = useState();
  const [password, setpassword] = useState();
  const submit = async () => {
    const reponse = await axios.post("http://localhost:5000/user/login", {
      email: mail,
      password: password,
    });
    localStorage.setItem("Token", reponse.data.accessToken);
    console.log(reponse);
  };
  return (
    <div>
      <h1>Login :</h1>
      <h2>Email :</h2>
      <input onChange={(e) => setmail(e.target.value)} value={mail} />
      <h2>Password :</h2>
      <input onChange={(e) => setpassword(e.target.value)} value={password} />
      <button
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
