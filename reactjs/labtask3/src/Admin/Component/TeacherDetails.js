import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const TeacherDetails=(props)=>{
    const {tutor_id} = useParams();
    const [teacher,setTeacher] = useState({});
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/");
        }
        axios.get(`http://localhost:8000/api/tdetails/${tutor_id}`)
        .then((rsp)=>{
            debugger;
            setTeacher(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
return (
    <div align='center'>
        <h1>Tutor Details</h1>
        <strong>Name:      {teacher.name}</strong><br/><br/>
        <strong>Email:     {teacher.email}</strong><br/><br/>
        <strong>ID:        {teacher.tutor_id}</strong><br/><br/>
        <strong>Phone:     {teacher.phone}</strong><br/><br/>
        <strong>Username:  {teacher.username}</strong><br/><br/>
        <strong>Gender:    {teacher.gender}</strong><br/><br/>
    </div>
)
}

export default TeacherDetails;