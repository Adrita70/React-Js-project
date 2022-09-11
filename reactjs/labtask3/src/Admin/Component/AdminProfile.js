import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const AdminProfile=(props)=>{
    const {username} = useParams();
    const [admin,setAdmin] = useState({});
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/");
        }
        axios.get(`http://localhost:8000/api/admin/details/${username}`)
        .then((rsp)=>{
            setAdmin(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
return (
    <div align='center'>
        <h1>Admin Profile</h1>
        <strong>Username:  {admin.username}</strong><br/><br/>
    </div>
)
}

export default AdminProfile;