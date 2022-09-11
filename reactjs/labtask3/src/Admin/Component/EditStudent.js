import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const EditStudent =()=>{
    const {student_id} = useParams();
    const [student,setStudent] = useState({});
    const[name,setName]=useState("");
    const[username,setUsername]=useState(""); 
    const[email,setEmail]=useState("");   
    const[phone,setPhone]=useState("");  
    const[address,setAddress]=useState(""); 
    const[desc,setDesc]=useState(""); 
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ name:name, username:username, email:email, phone:phone,address:address, desc:desc };
        axios.post(`http://localhost:8000/api/editStudent/${student_id}`,data)
        .then((rsp)=>
        {        
            setStudent(rsp.data);
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
        axios.get(`http://localhost:8000/api/sdetails/${student_id}`)
        .then((rsp)=>{
            
            setName(rsp.data.name);
            setUsername(rsp.data.username);
            setEmail(rsp.data.email);
            setPhone(rsp.data.phone);
            setAddress(rsp.data.address);
            setDesc(rsp.data.desc);

        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>
            <h1>Edit Student Details</h1>
        <form onSubmit={Submit}>
            <span>{msg}</span><br/>
            Name : <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/><br/><br/>
            Username : <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username}/><br/><br/>
            Email : <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/><br/>
            Phone : <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/><br/><br/>
            Address : <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address}/><br/><br/>
            Desc : <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default EditStudent;