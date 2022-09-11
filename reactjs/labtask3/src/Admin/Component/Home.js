import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const Home=()=>{
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/");
        }
         
    },[]);
    const handleClick=()=>{
        localStorage.clear()
    }
    return (  
        <div>
            <h1>Welcome</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )

}
export default Home;