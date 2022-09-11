import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const AdminLogin =()=>{
    const[username,setUserName]=useState("");
    const[password,setPassWord]=useState("");
    const[msg,setMsg]=useState("");
    const navigate= useNavigate();
    const Submit=(event)=>{
    event.preventDefault();
    var data={username:username, password:password};
    axios.post("http://localhost:8000/api/adminlogin",data)
    .then((rsp)=>{ 
    setMsg(rsp.data.msg); 
    localStorage.setItem('_authToken',rsp.data.token);
    if(rsp.data.msg=="Login successfully"){
    navigate("/home"); 
    }
},(err)=>{
    debugger;
    }) 
    } 
    return(
    <form onSubmit={Submit}>
    <span>{msg}</span><br/>
    Username : <input type="text" onChange={(e)=>setUserName(e.target.value)} value={username}/><br/>
    Password: <input type="password" onChange={(e)=>setPassWord(e.target.value)} value={password} ></input><br/>
    <input type="submit" url="/home" value="Login"/>
    </form>
    )
    }

export default AdminLogin;

