import Navbar from "../Navigation/Navbar";
import { useState,useEffect } from "react";

const TutorHome =()=>
{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[id,setId]=useState("");
    const[mfile,setFile]=useState("");

    useEffect(()=>
    {
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setId(localStorage.getItem('id'));
        setFile(localStorage.getItem('image'));
    },
    []);

    
    return (
        <div>
            <Navbar/>
            <div style={{border: '5px solid black', margin: '1rem'}}>
                <div style={{marginRight: '350px', display: 'inline-block', padding: '1rem 1rem', verticalAlign: 'middle',fontSize: '20px'}}>
                    <label>Welcome, <h3>{name}</h3></label><br/>
                    <label>{email}</label><br/>
                    <label>ID : {id}</label>
                </div>
                <div style={{marginLeft: '47%', display: 'inline-block', padding: '1rem 1rem', verticalAlign: 'middle'}}>
                    <img style={{borderRadius: '50%'}} width="100" height="100" src={`http://localhost:8000/storage/tutorpics/${mfile}`} alt="tutor-image"/>
                </div>
            </div>
            
            <br/><br/>
            <div style={{border: '10px solid black',fontSize: '20px'}}>
                <p style={{marginLeft: '10px'}}>
                    Tutoring is educational support, either one-on-one or in small groups. It works to support or complement regular classroom activities. It -
                </p>
                <p style={{marginLeft: '50px'}}>
                    <ul>
                        <li>Gives students personalized learning plans</li>
                        <li>Addresses special educational needs</li>
                        <li>Provides safe environment for learning</li>
                        <li>Reduces learning loss</li>
                        <li>Boosts students confidence</li>
                        <li>Teaches lifelong learning skills</li>
                    </ul>
                </p>
            </div>
        </div>
        
    )
}
export default TutorHome;