import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import './style.css'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Tasks = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [localstoreg,setLocaLstoreg] =useState('')

    const getTask = async () => {
        const result = await axios.get(`${BASE_URL}/tasks`,{
        headers: {
            Authorization:`${localstoreg}`,
          },});
        setTasks(result.data);
      };
    return (
        <>
        <div className="task">
            <h1>Tasks</h1>
        </div>
            <div>
         {tasks.map((item, i) => (
            <ul>
              <li key={i}>{item.task}</li>
              </ul>))}
              </div>
                  </>
    
         )
}

export default Tasks
