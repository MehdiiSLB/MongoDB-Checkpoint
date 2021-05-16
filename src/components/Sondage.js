import React, { useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Sondage = () => {
  const [sujet, setsujet] = useState();
  const [questions, setquestions] = useState();
  const Save = async () => {
    const getsondages = await axios.get("http://localhost:5000/sondage", {
      sujet: sujet,
      questions: questions,
    });
  };
  useEffect(() => {
    Save();
  }, []);
  return (
    <div>
      <input onChange={(e) => setsujet(e.target.value)} value={sujet} />
    </div>
  );
};
export default Sondage;
