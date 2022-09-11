import { useState,useEffect } from "react";
import NavbarIn from './NavbarIn';
import axios from 'axios';

const Profileedit =()=>
{
    const[username,setUsername] = useState("");
    const[feedback,setFeedback] = useState("");
    const[rating,setRating] = useState("");

    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");

    const SubmitForm=(event)=>{
        event.preventDefault();
        var data={username:username, feedback:feedback,rating:rating};
        axios.post(`http://localhost:8000/api/student/addfeedback`,data)
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
        setUsername(localStorage.getItem('username'));
        
    },
    []);

    
    return (
        <div align='center'>  
         <NavbarIn/> 
         <form onSubmit={SubmitForm}>
         <h3>{msg}</h3>
            <input type="text" name="username" placeholder="Enter Your User Name" value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br/><br/>
            <textarea name="feedback"   rows = "15" cols = "100"  placeholder="Write Your Feedback Here!" value={feedback} onChange={(e)=>{setFeedback(e.target.value)}}></textarea><br/><br/>
            <label >Rating</label><br/>
            <input type="number" name="rating" placeholder="Give Your Rating out of 5" value={rating} onChange={(e)=>{setRating(e.target.value)}} /><br/><br/>
        <br/>
            <input type="submit" value="Submit"/>
            </form>
       </div>
        
    )
}
export default Profileedit;