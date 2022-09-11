import {useState} from 'react';
import axios from 'axios';
const AddCourse =()=>{
    const[categories,setSubject]=useState("");
    const[classes,setMedium]=useState("");
    const[subjects,setDivision]=useState("");
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ categories:categories, classes:classes, subjects:subjects};
        axios.post("http://localhost:8000/api/addCourse",data)
        .then((rsp)=>{
         setMsg(rsp.data.msg);
        },(err)=>{

        }) 
    }
    return(
        <div align='center'>
            <h1>Add Schedule</h1>
        <form onSubmit={Submit}>
            <span>{msg}</span><br/>
            Course : <input type="text" onChange={(e)=>setSubject(e.target.value)} value={categories}/><br/><br/>
            Medium : <input type="text" onChange={(e)=>setMedium(e.target.value)} value={classes}/><br/><br/>
            Class : <input type="text" onChange={(e)=>setDivision(e.target.value)} value={subjects}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default AddCourse;