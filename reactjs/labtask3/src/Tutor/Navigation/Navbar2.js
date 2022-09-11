import MenuItem from './MenuItem';

const Navbar2 =()=>{
    return (
        <nav>
            <center>
                <b>
                    <MenuItem url="/" title="Tutor Time!"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/tutorlogin" title="Login"/>
                    <label>&nbsp;|&nbsp;</label>
                    <MenuItem url="/betutor" title="Become A Tutor"/>
                    <hr/><hr/>
                </b>
            </center>
            
        </nav>
    )   
}
export default Navbar2;