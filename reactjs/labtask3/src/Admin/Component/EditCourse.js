import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const EditCourse =()=>{
    const {course_id} = useParams();
    
    const [categories,setSubject] = useState({});
    const[classes,setMedium]=useState("");
    const[subjects,setDivision]=useState("");
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ categories:categories, classes:classes, subjects:subjects};
        axios.post(`http://localhost:8000/api/editCourse/${course_id}`,data)
        .then((rsp)=>
        {
            setMsg(rsp.data.msg);
        },(err)=>{
        }) 
    }
    const navigate= useNavigate();
    useEffect(()=>
    {
        /*console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/");
        }*/
        axios.get(`http://localhost:8000/api/course/${course_id}`)
        .then((rsp)=>{          
            setSubject(rsp.data.categories);
            setMedium(rsp.data.classes);
            setDivision(rsp.data.subjects);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>
            <h1>Edit Course</h1>
        <form onSubmit={Submit}>
            <span>{msg}</span><br/>
            Subject : <input type="text" onChange={(e)=>setSubject(e.target.value)} value={categories}/><br/><br/>
            Medium: <input type="text" onChange={(e)=>setMedium(e.target.value)} value={classes}/><br/><br/>
            Division : <input type="text" onChange={(e)=>setDivision(e.target.value)} value={subjects}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default EditCourse;