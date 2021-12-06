import axios from "axios";
import React,{useEffect,useState} from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;


function Register() {
  //register
const [name, setName]=useState("");
const [password, setPassword]=useState("");
const [role, setRole]=useState("");

const register = async() => {
  try { 
    const result = 
  
    await axios.post(`${BASE_URL}/resgister`,{
    name,
    password,
    role :"61a60aeff378d491f8d63f95"
    })
    console.log("register successful");
  } catch (error) {
      console.log("register failed");
    console.log(error);
    
  }
 

}

  
  return (

    <>
    {/* register */}
      <input type="text" name="name" placeholder="name" onChange={(e) => setName (e.target.value)} /> 
      <br/>
      <input type="password" name="password" placeholder="password" onChange={(e) => setPassword (e.target.value)}   /> 
      <br/>
      <button onClick={register}>register</button>






    </>
  );
}

export default Register;
