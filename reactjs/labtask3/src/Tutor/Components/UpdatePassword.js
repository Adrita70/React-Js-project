import axiosConfig from './axiosConfig';
import { useState,useEffect } from 'react';
import Navbar from '../Navigation/Navbar';

const UpdatePassword=()=>
{
    const[id,setId] = useState("");
    const[opassword,setOpassword] = useState("");
    const[npassword,setNpassword] = useState("");
    const[cpassword,setCpassword] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");
    
    useEffect(()=>
    {
        setId(localStorage.getItem('id'));
    },
    []);

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {id:id,opassword:opassword,npassword:npassword,cpassword:cpassword};

        axiosConfig.post("/editpw",data)
        .then
        (
            (rsp)=>
            {
                console.log(rsp.data);
                setMsg(rsp.data.msg);
            },
            (er)=>
            {
                if(er.response.status === 422)
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
            <Navbar/>
            <h3>{msg}</h3>
            <h1 align="center">Change your password</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                <br/>
                Old Password: <input type="password" name="opassword" value={opassword} onChange={(e)=>{setOpassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.opassword? err.opassword[0]:''}</span><br/>

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
export default UpdatePassword;