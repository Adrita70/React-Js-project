import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const EditAdmin =()=>{
    const {username} = useParams();
    const [admin,setAdmin] = useState({});
    const[uname,setUname]=useState(""); 
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ username:uname};
        axios.post(`http://localhost:8000/api/editAdmin/${username}`,data)
        .then((rsp)=>
        {        debugger;
            setAdmin(rsp.data);
            setMsg(rsp.data.msg);
        },(err)=>{debugger;
        }) 
    }
   const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/");
        }
        axios.get(`http://localhost:8000/api/admin/details/${username}`)
        .then((rsp)=>{debugger;
            setUname(rsp.data.uname);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>
            <h1>Edit Admin Profile</h1>
        <form onSubmit={Submit}>
            <span>{msg}</span><br/>
            Username : <input type="text" onChange={(e)=>setUname(e.target.value)} value={username}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default EditAdmin;