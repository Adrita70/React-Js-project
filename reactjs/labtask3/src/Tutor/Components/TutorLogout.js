import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import Cookies from 'universal-cookie';
import axios from 'axios';
 
axios.defaults.withCredentials = true

const TutorLogout=()=>
{
    const cookies = new Cookies();
    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    useEffect((config)=>
    {
        var data = {token_key:localStorage.getItem('_authToken')};/////token///////
        axiosConfig.post("/tutor/logout", data)
        .then
        (
            (rsp)=>
            {                
                localStorage.clear();
                const deleteCookie = () => {
                    axios.get('http://localhost:4000/deletecookie',{ withCredentials: true }).then((res) =>{
                      console.log(res.data)
                    })
                  }

                window.location.href="/tutorlogin";
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
export default TutorLogout;