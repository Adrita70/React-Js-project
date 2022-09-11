import MenuItem from './MenuItem';

const Navbar2 =()=>{
    return (
        <nav>
            <center>
                <b>
                    <MenuItem url="/" title="Tutor Time!"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/student/login" title="Login"/>
                    <hr/><hr/>
                </b>
            </center>
            
        </nav>
    )   
}
export default Navbar2;