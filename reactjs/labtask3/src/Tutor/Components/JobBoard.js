import React from 'react';
import Navbar from '../Navigation/Navbar';
import { useState,useEffect } from 'react';
import axiosConfig from './axiosConfig';

const JobBoard=({ jobs, loading })=>
{
    var app_id = "";
    const[teacher_id,setId] = useState("");

    const[msg,setMsg] = useState("");

    useEffect(()=>
    {
        setId(localStorage.getItem('id'));
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


    if (loading)
    {
        return(
            <div>
                <Navbar/>
                <h1 align="center">Loading...</h1>
                <br/><br/>
            </div>
        )
    }

    return(
        <div>
            <Navbar/>
            <h3>{msg}</h3>
            <h1 align="center">Available Jobs</h1>
            <br/>
            <form onSubmit={handleForm} align="center">
                {
                    jobs.map((st)=>(
                        <div>
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
                            </fieldset><br/><br/>
                        </div>
                    ))
                }
                <br/><br/>
            </form>
        </div>
    )
}
export default JobBoard;