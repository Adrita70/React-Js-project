import {useState,useEffect} from 'react';
import Navbar from '../Navigation/Navbar';
import axiosConfig from './axiosConfig';
import { Link } from 'react-router-dom';

const MyProfile=()=>{
    const[name,setName] = useState("");
    const[gender,setGender] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    useEffect(()=>
    {
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setGender(localStorage.getItem('gender'));
    },
    []);
    
    return(
        <div>
            <Navbar/>
            <br/><br/>
            <h1 align="center">My Profile</h1>

            <div style={{marginLeft: '120px', marginRight: '120px', border: '7px solid black',  fontSize: '20px'}} align="center" border="5"><br/>
                <p>
                    Name : {name}
                    <br/><br/>
                    Phone : {phone}
                    <br/><br/>
                    Email : {email}
                    <br/><br/>
                    Gender : {gender}
                    <br/>
                </p>
                <br/>
                <p>
                    <button style={{marginRight: '50px'}}><b><Link style={{textDecoration: 'none'}} to='/tutoreditprofile'>Edit Profile</Link></b></button>
                    <button style={{marginLeft: '50px'}}><b><Link style={{textDecoration: 'none'}} to='/tutorpasswordchange'>Change Password</Link></b></button>
                </p>
            </div>
        </div>
    )
}
export default MyProfile;