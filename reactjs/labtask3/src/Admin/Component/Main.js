import TopMenu from "../Menu/TopMenu";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ListStudents from "./ListStudents";
import ListTeacher from "./ListTeacher";
import CourseList from "./CourseList";
import ScheduleList from "./ScheduleList";
import AddCourse from "./AddCourse";
import EditStudent from "./EditStudent";
import EditTutor from "./EditTutor";
import EditCourse from "./EditCourse";
import EditSchedule from "./EditSchedule";
import EditAdmin from "./EditAdmin";
import AddSchedule from "./AddSchedule";
import AdminLogin from "./AdminLogin"
import ListAdmin from "./ListAdmin";
import AdminProfile from "./AdminProfile";
import TokenList from "./TokenList";
import StudentDetails from "./StudentDetails";
import TeacherDetails from "./TeacherDetails";
import Home from "./Home";
const Main=()=>{
    return (
        <div>
            <BrowserRouter>
            <TopMenu/> 
                <Routes>
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
export default Main;