import {useState} from 'react';
import axios from 'axios';
import NavbarR from './NavbarR';



const Registration =()=>{

    const[name,setName] = useState("");
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[address,setAddress] = useState("");
    const[desc,setDesc] = useState("");
    const[password,setPassword] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const SubmitForm=(event)=>
    {
        event.preventDefault();
        var data={ name:name,username:username,email:email,phone:phone,address:address,desc:desc,password:password,};
        axios.post("http://localhost:8000/api/student/create",data)
        .then((rsp)=>{
         setMsg(rsp.data.msg);
        },(err)=>{

        }) 
    }
  

    return (
        <div align='center'>
         <NavbarR/>
            <h1>Create Your Account</h1>
        <form onSubmit={SubmitForm}>
        <h3>{msg}</h3>
            <input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
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
export default Registration;