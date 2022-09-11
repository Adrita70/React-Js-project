import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const ListTeacher=()=>{
    const [teachers,setTeacher] = useState([]);
    const[search_tea,setSearch_tea]=useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/");
        }
        axios.get("http://localhost:8000/api/teacherdetails")
        .then((rsp)=>{
            debugger;
            setTeacher(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);

    const Submit=(event)=>{  
        event.preventDefault();
        var data={ search_tea:search_tea};
        axios.post("http://localhost:8000/api/tsearch",data)
        .then((rsp)=>{ 
            setTeacher(rsp.data);
        },(err)=>{
        }) 
    }

     return(
        <div align='center'> 
        <form onSubmit={Submit} >
        <input type="text" placeholder="Search tutor here" onChange={(e)=>setSearch_tea(e.target.value)} value={search_tea}/>
        <input type="submit" value="Search"/>
        </form>  
         <h1 align='center'>Teacher List</h1>
            <table border="3">
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Id</th>
            <th>Phone Number</th>
            <th>Username</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Banned</th>
           
            </tr>
                {
                    teachers.map((st)=>(
                    <tr> 
                        <td><Link to={`/teacher/details/${st.tutor_id}`}>{st.name}</Link></td>
                        <td>{st.email}</td>
                        <td>{st.tutor_id}</td>
                        <td>{st.phone}</td>
                        <td>{st.username}</td>
                        <td>{st.gender}</td>
                        <td><a href={`/editTutor/${st.tutor_id}`}>Edit</a></td>
                        <td><a href={`http://localhost:8000/api/delete/${st.tutor_id}`}>Delete</a></td>
                        <td><a href={`http://localhost:8000/api/tutors/status/${st.tutor_id}`}>Banned</a></td>
                    </tr>))
                }
            </table>
        </div>
    )
}
export default ListTeacher;