import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainNavbar from './MainNavbar';
const MainPage=()=>
{
    return (  
        <div style={{backgroundColor: 'lightGray'}}>
            <MainNavbar/>
            <fieldset>
                <legend><h1>About Us</h1></legend>
                <hr/>
                <label style={{fontSize: '25px', color: 'blue'}}><b>Who We Are</b></label>
                <p style={{fontSize: '18px'}}>Our story began in 1984, founded on the belief that every child deserves the chance to maximize their learning experiences. While working as a special education teacher and department head in the Toronto District School Board, Rhona Sallay identified the need for additional support at home.<br/><br/>Outside the classroom, she experienced as a parent the challenges that come with tutoring your own children. With a strong desire to support students and their families, Teachers on Call was born.<br/><br/>Our family business has expanded and grown to include Rhona's daughter, Joanne Sallay, who is now President of Teachers on Call. It is quite symbolic as she was one of our first students.
                </p>

                <label style={{fontSize: '25px', color: 'blue'}}><b>Moving Forward</b></label>
                <p style={{fontSize: '18px'}}>Much has changed in the education world since our start. With a handful of tutors on our team, the requests we received were initially for high-school students who needed remedial help.<br/><br/>Over the last three decades we have seen academic needs evolve to include literacy and numeracy enrichment for elementary students, specialty support for Core, Extended and Immersion French, organization, time management and study skills.<br/><br/>Many of our alumni have reached out to us to share their academic and professional success stories. We learned that past students achieved marks they never thought possible, graduated from competitive post secondary programs, and entered meaningful careers and professions. It makes us proud to learn we played a role in our graduates achieving their goals in school and in life.
                </p>
                <hr/>
                <p style={{fontSize: '18px'}}>TutorTime.com is a service product of <b>The Academic Medic Ltd.</b><br/>
                This is a online platform for tutors & students.<br/>
                It helps student/parents to find verified & skilled tutors in-person & online  since 2022.</p>
            </fieldset> 
            <br/><br/><br/><br/>

            <fieldset>
                <legend align="center"><h1>Contact Us</h1></legend>
                <table align='center'>
                    <tbody>
                        <tr>
                            <th align='left'>Address:</th>
                            <td>408/1, Kuratoli, Khilkhet, Dhaka 1229, Bangladesh</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
                <table align='center'>
                    <tbody>
                        <tr>
                            <th align='left'>Phone:</th>
                            <td>+88 02 841 4046-9; +88 02 841 4050</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
                <table align='center'>
                    <tbody>
                        <tr>
                            <th align='left'>Email:</th>
                            <td>tutor_time@zohomail.com</td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    )

}
export default MainPage;