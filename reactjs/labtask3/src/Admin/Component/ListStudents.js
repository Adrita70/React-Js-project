import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const ListStudents=()=>{
    const [students,setStudents] = useState([]);
    const[search_stu,setSearch_stu]=useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/");
        }
        axios.get("http://localhost:8000/api/studentdetails")
        .then((rsp)=>{
            debugger;
            setStudents(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
    const Submit=(event)=>{  
        event.preventDefault();
        var data={ search_stu:search_stu};
        axios.post("http://localhost:8000/api/ssearch",data)
        .then((rsp)=>{ 
            setStudents(rsp.data);
        },(err)=>{
        }) 
    }
    return(
        <div align='center'>   
        <form onSubmit={Submit} >
        <input type="text" placeholder="Search student here" onChange={(e)=>setSearch_stu(e.target.value)} value={search_stu}/>
        <input type="submit" value="Search"/>
        </form>
         <h1 align='center'>Student List</h1>
            <table border="3">
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Id</th>
                <th>Phone Number</th>
                <th>Username</th>
                <th>Address</th>
                <th>Desc</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Banned</th>
                </tr>
                {
                    students.map((st)=>(
                    <tr> 
                        <td><Link to={`/student/details/${st.student_id}`}>{st.name}</Link></td>
                        <td>{st.email}</td>
                        <td>{st.student_id}</td>
                        <td>{st.phone}</td>
                        <td>{st.username}</td>
                        <td>{st.address}</td>
                        <td>{st.desc}</td>
                        <td><a href={`/editStudent/${st.student_id}`}>Edit</a></td>
                        <td><a href={`http://localhost:8000/api/remove/${st.student_id}`}>Delete</a></td>
                        <td><a href={`http://localhost:8000/api/students/status/${st.student_id}`}>Banned</a></td>
                        
                    </tr>))
                }
            </table>
            
        </div>
    )
}
export default ListStudents;