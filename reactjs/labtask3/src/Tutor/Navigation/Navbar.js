import MenuItem from './MenuItem';

const Navbar =()=>{
    return (
        <nav>
            <center>
                <b>
                    <MenuItem url="/tutorhome" title="Home"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/mytutorprofile" title="My Profile"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/jobboard" title="Job Board"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/tutormyjobs" title="My Jobs"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/tutorcourses" title="Courses"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/tutorstats" title="Statistics"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/tutorfeedbacks" title="Feedbacks"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/tutorlogout" title="Logout"/>
                    <hr/><hr/>
                </b>
            </center>
            
        </nav>
    )   
}
export default Navbar;