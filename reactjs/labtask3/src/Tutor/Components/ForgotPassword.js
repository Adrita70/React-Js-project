import {useState} from 'react';
import Navbar2 from '../Navigation/Navbar2';
import axiosConfig from './axiosConfig';
 

const SendOtp=()=>
{
    const[username,setUsername] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {username:username};

        axiosConfig.post("/tutorforgot",data)
        .then
        (
            (rsp)=>
            {
                localStorage.setItem('username',rsp.data.data.username);
                localStorage.setItem('email',rsp.data.data.email);

                window.location.href="/fpws";
                console.log(rsp.data.token);
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
            <h1 align="center">Forgot Password</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                <br/>
                Please enter your username to search for your account.<br/><br/><input type="text" name="username" value={username} placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.username? err.username[0]:''}</span><br/>

                <br/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}
export default SendOtp;