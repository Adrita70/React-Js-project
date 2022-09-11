import axios from 'axios';
import {useState,useEffect} from 'react';


const StudentLogout=()=>
{
    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    useEffect((config)=>
    {
        var data = {token_key:localStorage.getItem('_authToken')};/////token///////
        axios.post("http://localhost:8000/api/student/logout",data)
        .then
        (
            (rsp)=>
            {                
                localStorage.clear();
                window.location.href="/student/Login";
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
        <div></div>
    )
}
export default StudentLogout;