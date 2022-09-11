import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import { Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

const SearchCourse=()=>
{
    const[id,setId] = useState("");

    const [category,setCategory] = useState("");
    const [categories,setCategories] = useState([]);
    const [classes,setClasses] = useState([]);

    const [show, setShow] = useState(false);

    const[err,setErr] = useState("");
    const[msg,setMsg] = useState("");

    useEffect(()=>
    {
        axiosConfig.get("/getallcourse")
        .then(
            (rsp)=>
            {
                setCategories(rsp.data.data);
                setShow(false);
                console.log(rsp);
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
    },[]);

    const LoadData=(event)=>
    {
        event.preventDefault();
        var data = {category:category};

        axiosConfig.post("/searchcourse",data)
        .then
        (
            (rsp)=>
            {
                setErr('');
                setClasses(rsp.data.data);
                setShow(true);
            },
            (er)=>
            {
                setShow(false);
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
            <h1 align="center">Search Tutor</h1>
            <br/>
            <form>
                <div align="center">
                    Select a Category :&nbsp;
                    <select name="categories" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value={""} defaultValue>Select a category</option>
                        {
                            categories.map(
                                (c)=>
                                (
                                    <option value={c.categories}>{c.categories}</option>
                                ))
                        }
                    </select><label>&nbsp;&nbsp;</label><button onClick={LoadData}>Search</button><br/>
                    <span style={{color: "red"}}>{err.categories? err.categories[0]:''}</span><br/>
                    <hr/>
                </div>
                
                {show ? (
                    <div>
                        <fieldset style={{marginLeft: '120px', marginRight: '120px', border: "5px solid black"}}>
                            <legend align="center"><h3>Classes</h3></legend><hr/>
                            <ol>
                                {
                                    classes.map((st)=>(
                                        <li>{st.classes}</li>
                                    ))
                                }
                            </ol>
                        </fieldset>
    
                        <br/><hr/>

                        <fieldset style={{marginLeft: '120px', marginRight: '120px', border: "5px solid black"}}>
                            <legend align="center"><h3>Subjects</h3></legend><hr/>
                            <ol>
                                {
                                    classes.map((st)=>(
                                        <li>{st.subjects}</li>
                                    ))
                                }
                            </ol>
                        </fieldset>
                    </div>
                ) : null}
                
            </form>
        </div>
    )
}

export default SearchCourse;