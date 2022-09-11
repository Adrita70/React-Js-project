import React from 'react';
import Navbar from '../Navigation/Navbar';

const MyJobs=({ jobs, loading })=>
{
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
            <h1 align="center">My Jobs</h1>
            <br/>
            {
                jobs.map((st)=>(
                    <div>
                        <fieldset style={{marginLeft: "120px", marginRight: "120px", border: "5px solid black", fontSize: "22px"}}>
                            <legend align="center"><h3>Application ID: {st.app_id}</h3></legend>
                            <p align="center">

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
                        </fieldset><br/><br/>
                    </div>
                ))
            }
            <br/><br/>
        </div>
    )
}
export default MyJobs;