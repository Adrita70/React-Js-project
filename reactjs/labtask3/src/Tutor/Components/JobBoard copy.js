import {useState,useEffect} from 'react';
import Navbar from '../Navigation/Navbar';
import axiosConfig from './axiosConfig';

const JobBoard=()=>
{
    const[jobs,setJobs] = useState([]);
    var[app_id,setApp] = useState("");
    const[teacher_id,setId] = useState("");
    const[currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage] = useState(10);

    const[msg,setMsg] = useState("");

    useEffect(()=>
    {
        setId(localStorage.getItem('id'));
        axiosConfig.get("/jobboard").then(
            (rsp)=>
            {    
                setJobs(rsp.data.data);
                console.log(rsp.data);
            },
            (er)=>
            {
                console.log(er.response.data);
                setMsg("Server Error Occured");
            }
        )
    },
    []);

    const handleForm=(event)=>
    {
        event.preventDefault();
        setMsg("");

        var data = {app_id:app_id, teacher_id:teacher_id};
        axiosConfig.post("/selcjobboard",data).then(
            (rsp)=>
            {
                window.location.href="/jobboard";
                setMsg(rsp.data.msg);
            },
            (error)=>
            {
                console.log(error.response.data);
                setMsg("Server Error Occured");
            }
        )
    }

    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    return(
        <div>
            <Navbar/>
            <h3>{msg}</h3>
            <h1 align="center">Available Jobs</h1>
            <br/>
            <form onSubmit={handleForm} align="center">
                {
                    jobs.map((st)=>(
                        <fieldset style={{marginLeft: "120px", marginRight: "120px", border: "5px solid black", fontSize: "22px"}}>
                            <legend align="center"><h3>Application ID: {st.app_id}</h3></legend>
                            <p align="center">
                                {app_id = st.app_id}
                                <br/>
                                Student ID: {st.student_id}
                                <br/>
                                Subject: {st.subject}
                                <br/>
                                Days/Week: {st.days_week}
                                <br/>
                                Location: {st.location}
                                <br/>
                                Salary: {st.salary}
                                <br/>
                                Time: {st.time}
                                <br/><br/>
                            </p>
                            <p align="right">
                                <input style={{cursor: 'pointer', backgroundColor: '#005CB9', padding: '10px 20px', marginRight: "30px", fontSize: "20px"}} type="submit" value="Apply"/>
                            </p>
                        </fieldset>
                    ))
                }
                <br/><br/>
            </form>
        </div>
    )
}
export default JobBoard;