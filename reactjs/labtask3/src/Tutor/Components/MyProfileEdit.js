import {useState, useEffect} from 'react';
import Navbar from '../Navigation/Navbar';
import axiosConfig from './axiosConfig';

const MyProfileEdit=()=>
{
    const[username,setUsername] = useState("");
    const[name,setName] = useState("");
    const[gender,setGender] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    useEffect(()=>
    {
        setUsername(localStorage.getItem('username'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setGender(localStorage.getItem('gender'));
    },
    []);

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = {username:username,name:name,gender:gender,email:email,phone:phone};

        axiosConfig.post("/edittutor",data)
        .then
        (
            (rsp)=>
            {
                localStorage.setItem('name',rsp.data.data.name);
                localStorage.setItem('phone',rsp.data.data.phone);
                localStorage.setItem('email',rsp.data.data.email);
                localStorage.setItem('gender',rsp.data.data.gender);
                
                console.log(rsp.data);
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
    }
    
    return(
        <div>
            <Navbar/>
            <h3>{msg}</h3>
            <h1 align="center">Edit Profile</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                Name : <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/> <span style={{color: 'red'}}>{err.name? err.name[0]:''}</span><br/>
                
                <br/>
                Gender :&nbsp;
                {
                    
                    gender == "male" &&
                    <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                        <option value={" "}>Select a gender</option>
                        <option value={"male"} selected>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"other"}>Other</option>
                    </select>
                }
                {
                    gender == "female" &&
                    <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                        <option value={" "}>Select a gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"} selected>Female</option>
                        <option value={"other"}>Other</option>
                    </select>
                }
                {
                    gender == "other" &&
                    <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                        <option value={" "}>Select a gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"other"} selected>Other</option>
                    </select>
                }
                <br/>
                <span style={{color: "red"}}>{err.gender? err.gender[0]:''}</span><br/>

                <br/>
                Email : <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.email? err.email[0]:''}</span><br/>

                <br/>
                Phone : <input type="number" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.phone? err.phone[0]:''}</span><br/>
                
                <br/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    )
}
export default MyProfileEdit;