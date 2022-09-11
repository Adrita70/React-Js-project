import {useState} from 'react';
import Navbar2 from '../Navigation/Navbar2';
import axiosConfig from './axiosConfig';

const CreateTutor=()=>{
    const[name,setName] = useState("");
    const[username,setUsername] = useState("");
    const[gender,setGender] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    const[cpassword,setCpassword] = useState("");
    const[mfile,setFile] = useState(null);
    const[f,setFlag] = useState(false);

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    const handleClick = (e) =>
    {
        setFlag(true);

        setFile(e.target.files[0]);
    };

    const handleForm=(event)=>
    {
        event.preventDefault();
        var data = new FormData();
        data.append("name", name);
        data.append("username", username);
        data.append("gender", gender);
        data.append("email", email);
        data.append("phone", phone);
        data.append("password", password);
        data.append("cpassword", cpassword);
        if(f)
        {
            data.append("file",mfile, mfile.name);
        }

        axiosConfig.post("/betutor",data).then(
            (rsp)=>
            {
                alert(rsp.data.msg);
                window.location.href="/tutorlogin";
            })
            .catch((error)=>
            {
                console.log("Kuttar Pola");
                if(error.response.status === 422)
                {
                    setErr(error.response.data);
                }
                else
                {
                    console.log(error.response);
                    setMsg("Server Error Occured");
                }
            }
        )
    }
    
    return(
        <div>
            <Navbar2/>
            <h3>{msg}</h3>
            <h1 align="center">Register as a Tutor</h1>
            <br/>
            <form onSubmit={handleForm} align="center">

                *Name : <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/> <span style={{color: 'red'}}>{err.name? err.name[0]:''}</span><br/>
                
                <br/>
                *Username : <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.username? err.username[0]:''}</span><br/>
                
                <br/>
                *Gender :&nbsp;
                <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                    <option value={" "} selected>Select a gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                </select><br/>
                <span style={{color: "red"}}>{err.gender? err.gender[0]:''}</span><br/>

                <br/>
                *Email : <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/> <span style={{color: "red"}}>{err.email? err.email[0]:''}</span><br/>

                <br/>
                *Phone : <input type="number" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.phone? err.phone[0]:''}</span><br/>
                
                <br/>
                *Password: <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.password? err.password[0]:''}</span><br/>

                <br/>
                *Confirm Password: <input type="password" name="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} /> <br/><span style={{color: "red"}}>{err.cpassword? err.cpassword[0]:''}</span><br/>
                
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Profile Picture: <input type="file" name="file" onChange={handleClick}/><span style={{color: "red"}}>{err.file? err.file[0]:''}</span><br/>
                
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}
export default CreateTutor;