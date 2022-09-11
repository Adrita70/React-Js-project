import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const CourseList=()=>{
    const [tutors,setTutors] = useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        /*console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/");
        }*/
        axios.get("http://localhost:8000/api/course")
        .then((rsp)=>{
            debugger;
            setTutors(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>   
         <h1 align='center'>Course List</h1>
            <table border="3">
                <tr>
                <th>Id</th>
                <th>Course</th>
                <th>Medium</th>
                <th>Class</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
                {
                    tutors.map((st)=>(
                    <tr> 
                        <td>{st.course_id}</td>
                        <td>{st.categories}</td>
                        <td>{st.classes}</td>
                        <td>{st.subjects}</td>
                        <td><a href={`/editCourse/${st.course_id}`}>Edit</a></td>
                        <td><a href={`http://localhost:8000/api/subdel/${st.course_id}`}>Delete</a></td>
                    </tr>))
                }
            </table>
        </div>
    )
}
export default CourseList;