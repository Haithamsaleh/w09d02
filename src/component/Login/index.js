import axios from "axios";
import React,{useEffect,useState} from "react";
import { useNavigate , Link} from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;


function Login() {
  //login
const [logName, setLogName]=useState("");
const [logPassword, setLogPassword]=useState("");
const [localstoreg,setLocaLstoreg] =useState('')
const navigate = useNavigate();



useEffect(() => {
     
  const token = localStorage.getItem("token");
  
  setLocal(token)
  
    }, [])

const Login = async() => {
  try { 
    const result = 
    await axios.post(`${BASE_URL}/login`,{
       name: logName,
        password: logPassword,
        
}
)
   console.log("login successful"); 
  } catch (error) {
    console.log("login failed"); 
    console.log(error);

    
  }
 
  localStorage.setItem("token", result.data.token);

  navigate('/tasks')
}

  
  return (
<div>
    
            {!local ? (
              <div>
      <input type="text" name="name" placeholder="name" onChange={(e) => setLogName (e.target.value)} /> 
      <br/>
      <input type="password" name="password" placeholder="password" onChange={(e) => setLogPassword (e.target.value)}   />
      <br/>
      <button onClick={Login}>login</button>
      </div>
      )
      :(<Link to="/tasks"> Tasks</Link>
            )
  
    
    
    }
 </div>   )
          }


export default Login;
