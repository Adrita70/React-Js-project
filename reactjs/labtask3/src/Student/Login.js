import {useState} from 'react';
import axios from 'axios';
import NavbarL from './NavbarL';



const Login=()=>
{
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const SubmitForm=(event)=>
    {
        event.preventDefault();
        var data = {username:username,password:password};

        axios.post("http://127.0.0.1:8000/api/student/login",data)
        .then
        (
            (rsp)=>
            {
                localStorage.setItem('_authToken',rsp.data.token);
                localStorage.setItem('id',rsp.data.data.student_id);
                localStorage.setItem('username',rsp.data.data.username);
                localStorage.setItem('name',rsp.data.data.name);
                localStorage.setItem('phone',rsp.data.data.phone);
                localStorage.setItem('email',rsp.data.data.email);
                localStorage.setItem('address',rsp.data.data.address);
                localStorage.setItem('desc',rsp.data.data.desc);
                localStorage.setItem('password',rsp.data.data.password);

                

                window.location.href="/student/StudentHome";
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
             <NavbarL/>
            <h3>{msg}</h3>
            <h1 align="center">Student Login</h1>
            <br/>
            <form onSubmit={SubmitForm} align="center" >

                <br/>
               <input type="text" name="username" placeholder="Enter  Username " value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br/>
                
                <br/>
                <input type="password" name="password" placeholder="Enter  Password " value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
 
                <br/>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    )
}
export default Login;