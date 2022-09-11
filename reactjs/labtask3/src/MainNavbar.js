import { Link } from "react-router-dom";

const MainNavbar =()=>{
    return (
        <nav>
            <center>
                <b>
                    <label>&nbsp;|&nbsp;</label>
                    <Link to="/admin/login">Admin</Link>
                    <label>&nbsp;|&nbsp;</label>
                    <Link to="/student/login">Student</Link>
                    <label>&nbsp;|&nbsp;</label>
                    <Link to="/tutorlogin">Be A Tutor</Link>
                    <label>&nbsp;|&nbsp;</label>
                    <hr/><hr/>
                </b>
            </center>
            
        </nav>
    )   
}
export default MainNavbar;