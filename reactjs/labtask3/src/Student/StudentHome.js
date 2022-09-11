import NavbarIn from './NavbarIn';

const StudentHome =()=>
{

    
    return (
        <div align="center">
               <NavbarIn/>
            <br/><br/>

            <h1>Tutor Time</h1>

            <div style={{border: '10px solid black',fontSize: '20px'}}>
                <p align="center">
                    Tutoring is educational support, either one-on-one or in small groups. It works to support or complement regular classroom activities. It -
                </p>
                <p>
                    <ul>
                        <li>Gives students personalized learning plans</li>
                        <li>Addresses special educational needs</li>
                        <li>Provides safe environment for learning</li>
                        <li>Reduces learning loss</li>
                        <li>Boosts students confidence</li>
                        <li>Teaches lifelong learning skills</li>
                    </ul>
                </p>
            </div>
        </div>
        
    )
}
export default StudentHome;