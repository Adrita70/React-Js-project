import axiosConfig from './axiosConfig';
import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar from '../Navigation/Navbar';

const UpdateCourse=(props)=>
{
    const[categories,setCategories] = useState("");
    const[classes,setClasses] = useState("");
    const[subjects,setSubjects] = useState("");
    

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const {id} = useParams();
    
    useEffect(()=>
    {
        var data = {id:id};

        axiosConfig.post("/searchcoursebyid",data)
        .then
        (
            (rsp)=>
            {                
                setCategories(rsp.data.data.categories);
                setClasses(rsp.data.data.classes);
                setSubjects(rsp.data.data.subjects);
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
    },
    []);

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {id:id,categories:categories,classes:classes,subjects:subjects};

        axiosConfig.post("/editcourse",data)
        .then
        (
            (rsp)=>
            {
                setErr('');
                console.log(rsp.data);
                setMsg(rsp.data.msg);
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
            <Navbar/>
            <h3>{msg}</h3>
            <h1 align="center">Update Course</h1>
            <br/>
            
            <form onSubmit={handleForm} align="center">

                Preferable Categories : <input type="text" name="categories" value={categories} onChange={(e)=>{setCategories(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.categories? err.categories[0]:''}</span><br/>
                
                <br/>
                Preferable Classes : <input type="text" name="classes" value={classes} onChange={(e)=>{setClasses(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.classes? err.classes[0]:''}</span><br/>
                
                <br/>
                Preferable Subjects : <input type="text" name="subjects" value={subjects} onChange={(e)=>{setSubjects(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.subjects? err.subjects[0]:''}</span><br/>

                <br/>
                <input type="submit" value="Update Course"/>
            </form>
        </div>
    )
}
export default UpdateCourse;