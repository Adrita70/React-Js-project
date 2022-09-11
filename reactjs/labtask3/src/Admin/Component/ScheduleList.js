import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const ScheduleList=()=>{
    const [tutors,setTutors] = useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/");
        }
        axios.get("http://localhost:8000/api/schedule")
        .then((rsp)=>{
            debugger;
            setTutors(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>   
         <h1 align='center'>Schedule List</h1>
            <table border="3">
                <tr>
                <th>Id</th>
                <th>Schedule</th>
                <th>Date</th>
                <th>Day</th>
                <th>Delete</th>
                </tr>
                {
                    tutors.map((st)=>(
                    <tr> 
                        <td>{st.tutor_id}</td>
                        <td>{st.time}</td>
                        <td>{st.date}</td>
                        <td>{st.day}</td>
                        <td><a href={`http://localhost:8000/api/schdel/${st.tutor_id}`}>Delete</a></td>
                    </tr>))
                }
            </table>
        </div>
    )
}
export default ScheduleList;