import { useState,useEffect } from "react";
import NavbarIn from './NavbarIn';

const Myprofile =()=>
{
    const[name,setName] = useState("");
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[address,setAddress] = useState("");
    const[desc,setDesc] = useState("");

    useEffect(()=>
    {
        setName(localStorage.getItem('name'));
        setUsername(localStorage.getItem('username'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setAddress(localStorage.getItem('address'));
        setDesc(localStorage.getItem('desc'));
    },
    []);

    
    return (
        <div align='center'>  
         <NavbarIn/> 
        <h1 align='center'>My Profile</h1>
           <table border="3" width = "30%">
              <tr>
                  <th>Name</th>
                  <td>{name}</td>
                  
              </tr>
              <tr>
                  <th>User Name</th>
                  <td>{username}</td>
                  
              </tr>
              <tr>
                  <th>Email</th>
                  <td>{email}</td>
                  
              </tr>
              <tr>
                  <th>Phone</th>
                  <td>{phone}</td>
                  
              </tr>
              <tr>
                  <th>Description</th>
                  <td>{desc}</td>
                  
              </tr>
           </table>
           <a href={"/student/Profileedit"}>Edit Profile</a>
       </div>
        
    )
}
export default Myprofile;