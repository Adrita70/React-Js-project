import axiosConfig from './axiosConfig';
import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';

const UpdateTutor=(props)=>
{
    const[name,setName] = useState("");
    const[username,setUsername] = useState("");
    const[gender,setGender] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const {id} = useParams();
    
    useEffect(()=>
    {
        var data = {id:id};

        axiosConfig.post("/searchtutor",data)
        .then
        (
            (rsp)=>
            {                
                setName(rsp.data.data.name);
                setUsername(rsp.data.data.username);
                setGender(rsp.data.data.gender);
                setEmail(rsp.data.data.email);
                setPhone(rsp.data.data.phone);
            },
            (er)=>
            {
                if(er.response.status==422)
                {
                    console.log(er.response.data);
                    setErr(er.response.data);
                }
                else
                {
                    console.log(er.response.data);
                    setMsg("Server Error Occured");
                }
            }
        )
    },
    []);

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {id:id,name:name,username:username,gender:gender,email:email,phone:phone};

        axiosConfig.post("/edittutor",data)
        .then
        (
            (rsp)=>
            {
                setErr('');
                console.log(rsp.data);
                setMsg(rsp.data.msg1);
            },
            (er)=>
            {
                if(er.response.status==422)
                {
                    console.log(er.response.data);
                    setErr(er.response.data);
                }
                else
                {
                    console.log(er.response.data);
                    setMsg("Server Error Occured");
                }
            }
        )
    }
    
    return(
        <div>
            <h3>{msg}</h3>
            <h1 align="center">Update Your Profile</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                Name : <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.name? err.name[0]:''}</span><br/>
                
                <br/>
                Username : <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.username? err.username[0]:''}</span><br/>
                
                <br/>
                Gender :&nbsp;
                <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                    <option value={" "} selected>Select a gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                </select><br/>
                <span style={{color: "red"}}>{err.gender? err.gender[0]:''}</span><br/>

                <br/>
                Email : <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.email? err.email[0]:''}</span><br/>

                <br/>
                Phone : <input type="number" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.phone? err.phone[0]:''}</span><br/>
                
                <br/>
                <input type="submit" value="Confirm"/>
            </form>
        </div>
    )
}
export default UpdateTutor;