import {useState} from 'react';
import Navbar2 from '../Navigation/Navbar2';
import axiosConfig from './axiosConfig';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
//axios.defaults.withCredentials = true
 

const TutorLogin=()=>
{
    const cookies = new Cookies();
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {username:username,password:password};

        axiosConfig.post("/tutor/login",data)
        .then
        (
            (rsp)=>
            {
                localStorage.setItem('_authToken',rsp.data.token);
                localStorage.setItem('id',rsp.data.data.tutor_id);
                localStorage.setItem('username',rsp.data.data.username);
                localStorage.setItem('name',rsp.data.data.name);
                localStorage.setItem('phone',rsp.data.data.phone);
                localStorage.setItem('email',rsp.data.data.email);
                localStorage.setItem('gender',rsp.data.data.gender);
                localStorage.setItem('image',rsp.data.data.image);

                cookies.set('myCat', 'Pacman', {sameSite: 'strict', path: '/', expires: new Date(new Date().getTime() + 100 * 1000), httpOnly: true});
               /* axios.get('http://localhost:4000',{ withCredentials: true }).then(
                    (res) =>
                    {
                        console.log(res.data)
                    }
                )*/

                window.location.href="/tutorhome";
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
            <h1 align="center">Tutor Login</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                <br/>
                Username : <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.username? err.username[0]:''}</span><br/>
                
                <br/>
                Password : <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.password? err.password[0]:''}</span><br/>
 
                <Link to='/forgotpw'>Forgotten Password?</Link>

                <br/>
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    )
}
export default TutorLogin;