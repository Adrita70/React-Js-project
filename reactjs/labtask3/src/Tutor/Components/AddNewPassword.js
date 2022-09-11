import axiosConfig from './axiosConfig';
import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar2 from '../Navigation/Navbar2';

const AddNewPassword=(props)=>
{
    const[npassword,setNpassword] = useState("");
    const[cpassword,setCpassword] = useState("");
    const[username,setUsername] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const {id} = useParams();

    useEffect(()=>
    {
        setUsername(localStorage.getItem('username')); 
    },[]);
    
    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {username:username,npassword:npassword,cpassword:cpassword};

        axiosConfig.post("/tutorNewPassword",data)
        .then
        (
            (rsp)=>
            {
                setMsg(rsp.data.msg);
                localStorage.clear();
                alert('Password Changed');
                window.location.href = '/tutorlogin';
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
            <Navbar2/>
            <h3>{msg}</h3>
            <h1 align="center">Change Password</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                <br/>
                New Password: <input type="password" name="npassword" value={npassword} onChange={(e)=>{setNpassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.npassword? err.npassword[0]:''}</span><br/>

                <br/>
                Confirm Password: <input type="password" name="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.cpassword? err.cpassword[0]:''}</span><br/>

                <br/>
                <input type="submit" value="Change"/>
            </form>
        </div>
    )
}
export default AddNewPassword;