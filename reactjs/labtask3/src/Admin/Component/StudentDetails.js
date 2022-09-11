import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const StudentDetails=(props)=>{
    const {student_id} = useParams();
    const [student,setStudent] = useState({});
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/");
        }
        axios.get(`http://localhost:8000/api/sdetails/${student_id}`)
        .then((rsp)=>{
            setStudent(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
return (
    <div align='center'>
        <h1>Student Details</h1>
        <strong>Name:      {student.name}</strong><br/><br/>
        <strong>Email:     {student.email}</strong><br/><br/>
        <strong>ID:        {student.student_id}</strong><br/><br/>
        <strong>Phone:     {student.phone}</strong><br/><br/>
        <strong>Username:  {student.username}</strong><br/><br/>
        <strong>Address:   {student.address}</strong><br/><br/>
        <strong>Desc:      {student.desc}</strong><br/>
    </div>
)
}

export default StudentDetails;