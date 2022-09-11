import {useState,useEffect} from 'react';
import axios from 'axios';
import NavbarIn from './NavbarIn';


const Teacherlist=()=>
{
    const [teachers,setTeacher] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/student/teacherlist")
        .then((rsp)=>{
            
            setTeacher(rsp.data);
        },(err)=>{
            
        }) 
    },[]);

    

     return(
        <div align='center'> 
           <NavbarIn/> 
         <h1 align='center'>Teacher List</h1>
            <table border="3">
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
           
           
            </tr>
                {
                    teachers.map((st)=>(
                    <tr> 
                        <td>{st.tutor_id}</td>
                        <td>{st.name}</td>
                        <td>{st.username}</td>
                        <td>{st.email}</td>
                        <td>{st.phone}</td>
                        <td>{st.gender}</td>
                        
                    </tr>))
                }
            </table>
        </div>
    )
}
export default Teacherlist;