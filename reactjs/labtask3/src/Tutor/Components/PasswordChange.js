import {useState,useEffect} from 'react';
import Navbar from '../Navigation/Navbar';
import axiosConfig from './axiosConfig';

const PasswordChange=()=>
{
    const[username,setUsername] = useState("");
    const[id,setId] = useState("");
    const[rem,setRem] = useState("");
    const[opassword,setOPassword] = useState("");
    const[password,setPassword] = useState("");
    const[cpassword,setCpassword] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    useEffect(()=>
    {
        setId(localStorage.getItem('id'));
        setUsername(localStorage.getItem('username'));
        var data = {id:id};
        axiosConfig.post("/searchtutor",data)
        .then
        (
            (rsp)=>
            {    
                setRem(rsp.data.data.password);
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
        
        if(rem == opassword)
        {
            setMsg("");
            var data = {username:username,opassword:opassword,password:password,cpassword:cpassword};
            axiosConfig.post("/tutoreditpassword",data).then(
                (rsp)=>
                {
                    console.log(rsp.data);
                    setMsg(rsp.data.msg);
                },
                (error)=>
                {
                    if(error.response.status === 422)
                    {
                        setErr(error.response.data);
                    }
                    else
                    {
                        console.log(error.response.data);
                        setMsg("Server Error Occured");
                    }
                }
            )
        }
        else
        {
            setMsg("Old password is incorrect");
        }

        
    }
    
    return(
        <div>
            <Navbar/>
            <h3>{msg}</h3>
            <h1 align="center">Change Password</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                <br/>
                Old Password: <input type="password" name="opassword" value={opassword} onChange={(e)=>{setOPassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.opassword? err.opassword[0]:''}</span><br/>

                <br/>
                New Password: <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.password? err.password[0]:''}</span><br/>

                <br/>
                Confirm Password: <input type="password" name="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.cpassword? err.cpassword[0]:''}</span><br/>
                
                <br/>
                <input type="submit" value="Change"/>
            </form>
        </div>
    )
}
export default PasswordChange;