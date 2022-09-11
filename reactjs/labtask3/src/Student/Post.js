import { useState,useEffect } from "react";
import NavbarIn from './NavbarIn';
import axios from 'axios';

const Post =()=>
{
    const[student_id,setStudent_id] = useState("");
    const[subject,setSubject] = useState("");
    const[days_week,setDays_week] = useState("");
    const[address,setAddress] = useState("");
    const[salary,setSalary] = useState("");
    const[time,setTime] = useState("");
    const[cond,setCond] = useState("");

    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");

    const SubmitForm=(event)=>{
        event.preventDefault();
        var data={ student_id:student_id,subject:subject,days_week:days_week,address:address,salary:salary,time:time};
        axios.post(`http://localhost:8000/api/student/application`,data)
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
        setStudent_id(localStorage.getItem('id'));
        setAddress(localStorage.getItem('address'));
        
    },
    []);

    
    return (
        <div align='center'>  
         <NavbarIn/> 
         <h3>{msg}</h3>
         <form onSubmit={SubmitForm}>
            <input  type="text" name="id"  value={student_id} onChange={(e)=>{setStudent_id(e.target.value)} } /><br/><br/>
            <input type="text" name="subject" placeholder="Enter Subject Name" value={subject} onChange={(e)=>{setSubject(e.target.value)}} /><br/><br/>
            <input type="text" name="days_week" placeholder="Enter Days/Week" value={days_week} onChange={(e)=>{setDays_week(e.target.value)}} /><br/><br/>
            <input type="text" name="address"  value={address} onChange={(e)=>{setAddress(e.target.value)}} /><br/><br/>
            <input type="text" name="salary" placeholder="Enter Salary Amount" value={salary} onChange={(e)=>{setSalary(e.target.value)}} /> <br/><br/>
            <input type="time" name="time"  value={time} onChange={(e)=>{setTime(e.target.value)}} /> <br/><br/>
            <input type="submit" value="Submit"/>
            </form>
       </div>
        
    )
}
export default Post;