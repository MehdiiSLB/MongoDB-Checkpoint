import React from "react";
import { useState } from "react";
import axios from "axios";
const Page1 = () => {
  const [Nom, setNom] = useState();
  const [Prenom, setPrenom] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Phone, setPhone] = useState();

  const submit = async () => {
    const reponse = await axios.post("http://localhost:5000/user", {
      email: Email,
      password: Password,
      nom: Nom,
      prenom: Prenom,
      phone: Phone,
    });
  };
  return (
    <div>
      <h1>Register for Sondage :</h1>
      <h2>Nom :</h2>
      <input onChange={(e) => setNom(e.target.value)} value={Nom} />
      <h2>Prenom :</h2>
      <input onChange={(e) => setPrenom(e.target.value)} value={Prenom} />
      <h2>Email :</h2>
      <input onChange={(e) => setEmail(e.target.value)} value={Email} />
      <h2>Password :</h2>
      <input onChange={(e) => setPassword(e.target.value)} value={Password} />
      <h2>Phone :</h2>
      <input onChange={(e) => setPhone(e.target.value)} value={Phone} />
      <button
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Page1;
