import axiosConfig from './axiosConfig';
import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

const UdCourse=(props)=>
{
    const[courses,setCourses] = useState([]);
    

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const {id} = useParams();
    
    useEffect(()=>
    {
        axiosConfig.get("/getallcourse")
        .then
        (
            (rsp)=>
            {                
                setCourses(rsp.data.data);
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
    
    return(
        <div>
            <Navbar/>
            <h3>{msg}</h3>
            <h1 align="center">Update Your Profile</h1>
            <br/>



            <div align="center">
                <table style={{border: "5px solid black"}}>
                    <thead>
                        <tr>
                            <th style={{border: "1px solid black"}}>Course ID</th>
                            <th style={{border: "1px solid black"}}>Category</th>
                            <th style={{border: "1px solid black"}}>Class</th>
                            <th style={{border: "1px solid black"}}>Subject</th>
                            <th style={{border: "1px solid black"}}>Edit</th>
                            <th style={{border: "1px solid black"}}>X</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((st)=>(
                                <tr>
                                    <td style={{border: "1px solid black"}} align="middle">{st.course_id}</td>
                                    <td style={{border: "1px solid black"}} align="middle">{st.categories}</td>
                                    <td style={{border: "1px solid black"}} align="middle">{st.classes}</td>
                                    <td style={{border: "1px solid black"}} align="middle">{st.subjects}</td>
                                    <td style={{border: "1px solid black"}} align="middle"><Link to={`/tutorcourses/udcourses/edit/${st.course_id}`}>Course</Link></td>
                                    <td style={{border: "1px solid black"}} align="middle"><Link to={`/tutorcourses/udcourses/delete/${st.course_id}`}>Delete Course</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UdCourse;