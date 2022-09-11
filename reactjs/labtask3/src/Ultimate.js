import {BrowserRouter,Route,Routes} from 'react-router-dom';


/*
-----------------------Arabi-----------------------
*/
import MainPage from './MainPage';

import TutorHome from "./Tutor/Components/TutorHome";
import CreateTutor from "./Tutor/Components/CreateTutor";
import DeleteTutor from "./Tutor/Components/DeleteTutor";
import UpdateTutor from "./Tutor/Components/UpdateTutor";
import PasswordChange from "./Tutor/Components/PasswordChange";
import RemovePassword from './Tutor/Components/RemovePassword';
import UpdatePassword from './Tutor/Components/UpdatePassword';
import AddNewPassword from './Tutor/Components/AddNewPassword';
import Courses from './Tutor/Components/Courses';
import CreateCourse from './Tutor/Components/CreateCourse';
import SearchCourse from './Tutor/Components/SearchCourse';
import UdCourse from './Tutor/Components/UdCourse';
import DeleteCourse from './Tutor/Components/DeleteCourse';
import UpdateCourse from './Tutor/Components/UpdateCourse';
import TutorLogin from './Tutor/Components/TutorLogin';
import TutorLogout from './Tutor/Components/TutorLogout';

/*
-----------------------Raiyan-----------------------
*/

import Registration from "./Student/Registration";
import Login from "./Student/Login";
import StudentHome from "./Student/StudentHome";
import Myprofile from "./Student/Myprofile";
import Profileedit from "./Student/Profileedit";
import StudentLogout from "./Student/StudentLogout";
import WebsiteReview from "./Student/WebsiteReview";
import Teacherlist from "./Student/Teacherlist";
import Post from "./Student/Post";








/*
-----------------------Faiza_Adrita-----------------------
*/
import ListStudents from "./Admin/Component/ListStudents";
import ListTeacher from "./Admin/Component/ListTeacher";
import CourseList from "./Admin/Component/CourseList";
import ScheduleList from "./Admin/Component/ScheduleList";
import AddCourse from "./Admin/Component/AddCourse";
import EditStudent from "./Admin/Component/EditStudent";
import EditTutor from "./Admin/Component/EditTutor";
import EditCourse from "./Admin/Component/EditCourse";
import EditSchedule from "./Admin/Component/EditSchedule";
import EditAdmin from "./Admin/Component/EditAdmin";
import AddSchedule from "./Admin/Component/AddSchedule";
import AdminLogin from "./Admin/Component/AdminLogin"
import ListAdmin from "./Admin/Component/ListAdmin";
import AdminProfile from "./Admin/Component/AdminProfile";
import TokenList from "./Admin/Component/TokenList";
import StudentDetails from "./Admin/Component/StudentDetails";
import TeacherDetails from "./Admin/Component/TeacherDetails";
import Home from "./Admin/Component/Home";
import MyProfile from './Tutor/Components/MyProfile';
import MyProfileEdit from './Tutor/Components/MyProfileEdit';
import PagJobBoard from './Tutor/Components/PagJobBoard';
import PagMyJobBoard from './Tutor/Components/PagMyJobBoard';
import PagMyFeedbacks from './Tutor/Components/PagMyFeedbacks';
import BarChart from './Tutor/Components/BarChart';
import ForgotPassword from './Tutor/Components/ForgotPassword';
import SendOtp from './Tutor/Components/SendOtp';

const Ultimate=()=>
{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    
                    {/*
                    ----------Arabi----------
                    */}
                    <Route path="/tutorhome" element={<TutorHome/>}></Route>
                    <Route path="/tutorlogin" element={<TutorLogin/>}></Route>
                    <Route path="/betutor" element={<CreateTutor/>}></Route>
                    <Route path="/mytutorprofile" element={<MyProfile/>}></Route>
                    <Route path="/tutoreditprofile" element={<MyProfileEdit/>}></Route>
                    <Route path="/tutorpasswordchange" element={<UpdatePassword/>}></Route>
                    <Route path="/jobboard" element={<PagJobBoard/>}></Route>
                    <Route path="/tutormyjobs" element={<PagMyJobBoard/>}></Route>
                    <Route path="/tutorfeedbacks" element={<PagMyFeedbacks/>}></Route>
                    <Route path="/tutorstats" element={<BarChart/>}></Route>
                    <Route path="/forgotpw" element={<ForgotPassword/>}></Route>
                    <Route path="/fpws" element={<SendOtp/>}></Route>
                    <Route path="/fpnp" element={<AddNewPassword/>}></Route>
                    
                    <Route path="/deletetutor/:id" element={<DeleteTutor/>}></Route>
                    <Route path="/edittutor/:id" element={<UpdateTutor/>}></Route>
                    <Route path="/tutorpwchange" element={<PasswordChange/>}></Route>                    
                    <Route path="/tutorpwremove/:id" element={<RemovePassword/>}></Route>
                    
                    <Route path="/tutorcourses" element={<Courses/>}></Route>
                    <Route path="/tutorcourses/addcourses" element={<CreateCourse/>}></Route>
                    <Route path="/tutorcourses/searchcourses" element={<SearchCourse/>}></Route>
                    <Route path="/tutorcourses/udcourses" element={<UdCourse/>}></Route>
                    <Route path="/tutorcourses/udcourses/edit/:id" element={<UpdateCourse/>}></Route>
                    <Route path="/tutorcourses/udcourses/delete/:id" element={<DeleteCourse/>}></Route>
                    <Route path="/tutorlogout" element={<TutorLogout/>}></Route>























                    {/*
                    ----------Raiyan----------
                    */}


                    <Route path="/student/create" element={<Registration/>}></Route>
                    <Route path="/student/login" element={<Login/>}></Route>
                    <Route path="/student/StudentHome" element={<StudentHome/>}></Route>
                    <Route path="/student/Myprofile" element={<Myprofile/>}></Route>
                    <Route path="/student/Profileedit" element={<Profileedit/>}></Route>
                    <Route path="/student/StudentLogout" element={<StudentLogout/>}></Route>
                    <Route path="/student/websitereview" element={<WebsiteReview/>}></Route>
                    <Route path="/student/teacherlist" element={<Teacherlist/>}></Route>
                    <Route path="/student/post" element={<Post/>}></Route>































                    {/*
                    ----------Faiza_Adrita----------
                    */}
                    <Route path="/student/details/:student_id" element={<StudentDetails/>}> </Route>
                    <Route path="/teacher/details/:tutor_id" element={<TeacherDetails/>}> </Route>
                    <Route path="/studentdetails" element={<ListStudents/>}></Route>
                    <Route path="/teacherdetails" element={<ListTeacher/>}></Route>
                    <Route path="/editStudent/:student_id" element={<EditStudent/>}></Route>
                    <Route path="/admin/login" element={<AdminLogin/>}></Route>
                    <Route path="/editTutor/:tutor_id" element={<EditTutor/>}></Route>
                    <Route path="/editCourse/:tutor_id" element={<EditCourse/>}></Route>
                    <Route path="/editSchedule/:tutor_id" element={<EditSchedule/>}></Route>
                    <Route path="/editAdmin/:username" element={<EditAdmin/>}></Route>
                    <Route path="/addCourse" element={<AddCourse/>}></Route>
                    <Route path="/course" element={<CourseList/>}></Route>
                    <Route path="/schedule" element={<ScheduleList/>}></Route>
                    <Route path="/admin" element={<ListAdmin/>}></Route>
                    <Route path="/admin/details/:username" element={<AdminProfile/>}></Route>
                    <Route path="/token" element={<TokenList/>}></Route>
                    <Route path="/addSchedule" element={<AddSchedule/>}></Route>
                    <Route path="/home" element={<Home/>}></Route> 






                </Routes>

            </BrowserRouter>
        </div>
    )
}
export default Ultimate;