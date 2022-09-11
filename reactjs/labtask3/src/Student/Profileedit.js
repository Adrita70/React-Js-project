import { useState,useEffect } from "react";
import NavbarIn from './NavbarIn';
import axios from 'axios';

const Profileedit =()=>
{
    const[name,setName] = useState("");
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[address,setAddress] = useState("");
    const[desc,setDesc] = useState("");
    const[password,setPassword] = useState("");

    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");

    const SubmitForm=(event)=>{
        event.preventDefault();
        var data={ name:name,username:username,email:email,phone:phone,address:address,desc:desc,password:password,};
        axios.post(`http://localhost:8000/api/student/updateprofile`,data)
        .then((rsp)=>
        {     
               
           
            setMsg(rsp.data.msg);
        },(er)=>
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

        }) 
    }

    useEffect(()=>
    {
        setName(localStorage.getItem('name'));
        setUsername(localStorage.getItem('username'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setAddress(localStorage.getItem('address'));
        setDesc(localStorage.getItem('desc'));
        setPassword(localStorage.getItem('password'));
        
    },
    []);

    
    return (
        <div align='center'>  
         <NavbarIn/> 
         <h3>{msg}</h3>
         <form onSubmit={SubmitForm}>
            <input  type="text" name="name" placeholder="Enter Your Name"  value={name} onChange={(e)=>{setName(e.target.value)} } /><br/><br/>
            <input type="text" name="username" placeholder="Enter Your User Name" value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br/><br/>
            <input type="email" name="email" placeholder="Enter Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/><br/>
            <input type="text" name="address" placeholder="Enter Your Address" value={address} onChange={(e)=>{setAddress(e.target.value)}} /><br/><br/>
            <input type="text" name="phone" placeholder="Enter Your Phone Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> <br/><br/>
            <input type="text" name="desc" placeholder="Enter Description(Optional)" value={desc} onChange={(e)=>{setDesc(e.target.value)}} /> <br/><br/>
            <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br/><br/>
            <input type="submit" value="Submit"/>
            </form>
       </div>
        
    )
}
export default Profileedit;