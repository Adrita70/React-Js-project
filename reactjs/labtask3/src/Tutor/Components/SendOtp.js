import {useState,useEffect} from 'react';
import Navbar2 from '../Navigation/Navbar2';
import axiosConfig from './axiosConfig';
 

const SendOtp=()=>
{
    const[otp,setOtp] = useState("");
    
    var email = localStorage.getItem('email');

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    useEffect(()=>
    {
        var data = {email:email}
        axiosConfig.post("/verify", data)
        .then(
            (rsp)=>
            {
                setMsg(rsp.data.msg);
                console.log(rsp);
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
    },[]);

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {otp:otp};

        axiosConfig.post("/verification",data)
        .then
        (
            (rsp)=>
            {
                window.location.href="/fpnp";
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
            <h3 align="center">{msg}</h3>
            <br/>
            <form onSubmit={handleForm} align="center">

                <br/>
                Please verify your account: <input type="text" name="otp" value={otp} placeholder="OTP" onChange={(e)=>{setOtp(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.otp? err.otp[0]:''}</span><br/>

                <br/>
                <input type="submit" value="Enter"/>
            </form>
        </div>
    )
}
export default SendOtp;