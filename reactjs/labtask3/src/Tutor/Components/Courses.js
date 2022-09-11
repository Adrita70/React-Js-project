import { Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

const Courses=()=>
{
    return(
        <div>
            <Navbar/>
            <fieldset>
                <legend align="center"><h1>Courses</h1></legend>
                <center>
                    <br/><br/><hr/>
                    <br/><button><Link style={{textDecoration: 'none'}} to={`/tutorcourses/addcourses`}>Add Courses</Link></button><br/><br/><hr/>
                    <br/><button><Link style={{textDecoration: 'none'}} to={`/tutorcourses/searchcourses`}>Search Courses</Link></button><br/><br/><hr/>
                    <br/><button><Link style={{textDecoration: 'none'}} to={`/tutorcourses/udcourses`}>Update / Delete Courses</Link></button><br/><br/>
                </center>
            </fieldset>        
        </div>
    )
}
export default Courses;