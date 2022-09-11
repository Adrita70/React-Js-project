import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const TokenList=()=>{
    const [tokens,setToken] = useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/");
        }
        axios.get("http://localhost:8000/api/token")
        .then((rsp)=>{
            debugger;
            setToken(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>   
         <h1 align='center'>Token List</h1>
            <table border="3">
                <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Token</th>
                <th>Created Time</th>
                <th>Expired Time</th>
                <th>Delete</th> 
                </tr>
                {
                    tokens.map((st)=>(
                    <tr> 
                        <td>{st.id}</td>
                        <td>{st.userid}</td>
                        <td>{st.token_key}</td>
                        <td>{st.created_at}</td>
                        <td>{st.expired_at}</td>
                        <td><a href={`http://localhost:8000/api/deltok/${st.id}`}>Delete</a></td>
                    </tr>))
                }
            </table>
        </div>
    )
}
export default TokenList;