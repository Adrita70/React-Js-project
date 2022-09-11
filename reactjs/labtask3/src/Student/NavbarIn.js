import MenuItem from './MenuItem';

const NavbarIn =()=>{
    return (
        <nav>
            <center>
                <b>
                    <MenuItem url="/student/StudentHome" title="Home"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/student/Myprofile" title="My Profile"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/student/post" title="Post"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/student/websitereview" title="Feedback"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/student/teacherlist" title="Teacher List"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/student/StudentLogout" title="Logout"/>
                    <hr/><hr/>
                </b>
            </center>
            
        </nav>
    )   
}
export default NavbarIn;