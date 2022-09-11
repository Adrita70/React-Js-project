import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const EditTutor =()=>{
    const {tutor_id} = useParams();
    const [tutor,setTutor] = useState({});
    const[name,setName]=useState("");
    const[username,setUsername]=useState(""); 
    const[email,setEmail]=useState("");   
    const[phone,setPhone]=useState("");  
    const[gender,setGender]=useState("");  
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ name:name, username:username, email:email, phone:phone, gender:gender };
        axios.post(`http://localhost:8000/api/editTutor/${tutor_id}`,data)
        .then((rsp)=>
        {        
            setTutor(rsp.data);
            setMsg(rsp.data.msg);
        },(err)=>{
        }) 
    }
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/");
        }
        axios.get(`http://localhost:8000/api/tdetails/${tutor_id}`)
        .then((rsp)=>{
            
            setName(rsp.data.name);
            setUsername(rsp.data.username);
            setEmail(rsp.data.email);
            setPhone(rsp.data.phone);
            setGender(rsp.data.gender);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>
            <h1>Edit Tutor Details</h1>
        <form onSubmit={Submit}>
            <span>{msg}</span><br/>
            Name : <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/><br/><br/>
            Username : <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username}/><br/><br/>
            Email : <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/><br/>
            Phone : <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/><br/><br/>
            Gender : <input type="text" onChange={(e)=>setGender(e.target.value)} value={gender}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default EditTutor;