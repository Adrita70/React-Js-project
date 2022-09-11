import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from './axiosConfig';
import { Link } from 'react-router-dom';

const DeleteTutor=(props)=>
{
    const {id} = useParams();

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");
    
    useEffect(()=>
    {
        var data = {id:id};

        axiosConfig.post("/deletetutor",data)
        .then
        (
            (rsp)=>
            {
                setErr('');
                setMsg(rsp.data.msg);
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
    [

    ]);

    return(
        <div>
            <h1>{msg}</h1>
            <button><Link to={`/`}>Okay</Link></button>
        </div>
    )
}

export default DeleteTutor;