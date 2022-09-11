<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
-----------------------------Arabi-----------------------------
*/
Route::post('/betutor',[TeacherController::class,'createSubmit']);
Route::post('/searchtutor',[TeacherController::class,'getTeacher']);
Route::post('/deletetutor',[TeacherController::class,'deleteTeacher']);
Route::post('/edittutor',[TeacherController::class,'editProfileSubmit']);

Route::post('/tutoreditpassword',[TeacherController::class,'changePasswordSubmit']);

Route::get('/jobboard',[TeacherController::class,'getJobs']);
Route::post('/tutormyjobs',[TeacherController::class,'myJobs']);
Route::post('/selcjobboard/',[TeacherController::class,'getJobsSubmit']);

Route::post('/editpw',[TeacherController::class,'updatePassword']);

Route::post('/tutorforgot',[TeacherController::class,'forgotPasswordSubmit']);


Route::post('/tutorNewPassword',[TeacherController::class,'changeForgotPasswordSubmit']);


Route::post('/verify',[TeacherController::class,'verify']);
Route::post('/verification',[TeacherController::class,'verifySubmit']);

Route::post('/myfeedbacks',[TeacherController::class,'myFeedbacks']);

Route::post('/createcourse',[TeacherController::class,'createCourseSubmit']);
Route::get('/getallcourse',[TeacherController::class,'getAllCourse']);
Route::post('/searchcourse',[TeacherController::class,'getCourse']);
Route::post('/searchcoursebyid',[TeacherController::class,'getCourseById']);
Route::post('/deletecourse',[TeacherController::class,'deleteCourse']);
Route::post('/editcourse',[TeacherController::class,'updateCourse']);

Route::post('/tutor/login',[TeacherController::class,'login']);
Route::post('/tutor/logout',[TeacherController::class,'logout']);


























/*
-----------------------------Raiyan-----------------------------
*/


Route::post('/student/create',[StudentController::class,'create'])->name('studentregistration');
Route::post('/student/login',[StudentController::class,'studentlogin'])->name('studentlogin');
Route::post('/student/logout',[StudentController::class,'logout'])->name('studentlogout');
Route::post('/student/updateprofile',[StudentController::class,'updateprofile'])->name('studentupdateprofile');
Route::post('/student/addfeedback',[StudentController::class,'addfeedback'])->name('studentaddfeedback');
Route::get('/student/teacherlist',[AdminController::class,'tlist'])->name('studentteacherlist');
Route::post('/student/teachersearch',[StudentController::class,'teachersearch'])->name('studentteachersearch');
Route::post('/student/application',[StudentController::class,'application'])->name('studentapplication');
Route::post('/student/mypost',[StudentController::class,'mypost'])->name('studentmypost');






































/*
-----------------------------Faiza_Adrita-----------------------------
*/
//Faiza
Route::get('/admin',[AdminController::class,'Home']);
Route::get('/teacherdetails',[AdminController::class,'tlist']);
Route::get('/tdetails/{tutor_id}',[AdminController::class,'tutor']);
Route::get('/studentdetails',[AdminController::class,'slist']);
Route::get('/sdetails/{student_id}',[AdminController::class,'student']);
Route::get('/students/status/{student}',[AdminController::class,'updateStatus']);
Route::get('/tutors/status/{tutor_id}',[AdminController::class,'updatetStatus']);
Route::post('/ssearch',[AdminController::class,'ssearch']);
Route::post('/tsearch',[AdminController::class,'tsearch']);
Route::get('/course',[AdminController::class,'clist']);
Route::get('/subdel/{tutor_id}',[AdminController::class,'subdel']);
Route::get('/addCourse',[AdminController::class,'addCourse']);
Route::post('/addCourse',[AdminController::class,'addCourse']);
Route::get('/editStudent/{student_id}',[AdminController::class,'editStudent']);
Route::post('/editStudent/{student_id}',[AdminController::class,'editStudent']);
Route::get('/editTutor/{tutor_id}',[AdminController::class,'editTutor']);
Route::post('/editTutor/{tutor_id}',[AdminController::class,'editTutor']);
Route::get('/editCourse/{course_id}',[AdminController::class,'editCourse']);
Route::post('/editCourse/{course_id}',[AdminController::class,'editCourse']);


//Adrita
Route::get('/adminlogin',[AdminController::class,'adlogin']);
Route::post('/adminlogin',[AdminController::class,'adloginSubmit']);
Route::get('/admin/details/{username}',[AdminController::class,'admin']);
//Route::post('/adsearch',[AdminController::class,'adsearch']);
Route::post('/adsearch',[AdminController::class,'adsearch']);
Route::get('/delete/{tutor_id}',[AdminController::class,'delete']);
Route::get('/remove/{student_id}',[AdminController::class,'remove']);
Route::get('/adminlogout',[AdminController::class,'logout']);
Route::get('/editAdmin/{username}',[AdminController::class,'editAdmin']);
Route::post('/editAdmin/{username}',[AdminController::class,'editAdmin']);
Route::get('/schedule',[AdminController::class,'sclist']);
Route::get('/schdel/{tutor_id}',[AdminController::class,'schdel']);
Route::get('/addSchedule',[AdminController::class,'addSchedule']);
Route::post('/addSchedule',[AdminController::class,'addSchedule']);
Route::get('/admin',[AdminController::class,'display']);
Route::get('/admin/{username}',[AdminController::class,'del']);
Route::get('/token',[AdminController::class,'tklist']);
Route::get('/deltok/{id}',[AdminController::class,'deltok']);
Route::get('/adminlogout',[AdminController::class,'logout']);
///////////////////////////upload//////////////////////////
Route::get('/upload',[AdminController::class,'create']);
Route::post('/upload',[AdminController::class,'save']);