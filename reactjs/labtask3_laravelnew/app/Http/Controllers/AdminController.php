<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Datetime;
use Illuminate\Support\Facades\mail;
use Illuminate\Support\Facades\Validator;


use App\Models\Application;
use App\Models\Admin;
use App\Models\Feedback;
use App\Models\Otp;
use App\Models\Student;
use App\Models\Tutor;
use App\Models\schedule;
use App\Models\Course;
use App\Models\Token;
use App\Models\TeacherReview;

use CreateStudentsTable;

class AdminController extends Controller
{
    //Faiza

    function tlist()//teacher list
    {
            $Tutors = Tutor::all();
            return response()->json($Tutors,200);
    }
   
    function slist()//studentlist
    {
            $Students = Student::all();
            return response()->json($Students,200);            
    }

    function clist()//course list
    {
            $Tutors = Course::all();
            return response()->json($Tutors,200);
            
    }

    function subdel($tutor_id)//course delete
    {
            $Tutors= Course::where('course_id',$tutor_id)->delete();
            return response()->json(["msg" =>"Course deleted successfully"]);     
    }

    function tutor($tutor_id)//tutor details
    {
            $Tutors = Tutor::where('tutor_id',$tutor_id)->first();
            return response()->json($Tutors,200);
    }

    function student($student_id)//student details
    {
            $Students = Student::where('student_id',$student_id)->first();
            return response()->json($Students,200);
    }

    function  addCourse(Request $req)//course form
    { 
        $validator = Validator::make($req->all(),
     [
        "categories"=>["required"],
        "classes"=>["required"],
        "subjects"=>["required"]
     ]);
       if($validator->fails())
        {
            return response()->json($validator->errors());
        }
        $app = new Course();
        $app->categories=$req->categories;
        $app->classes=$req->classes;
        $app->subjects=$req->subjects;
        $app->save();
        return response()->json(["msg"=> "course added Successfully"]);
    }

    function  editStudent(Request $req)//edit student form
    {    
        $std = new Student();
        $std->exists=true;
        $std->student_id=$req->student_id;
        $std->name=$req->name;
        $std->username=$req->username;
        $std->email=$req->email;
        $std->phone=$req->phone;
        $std->address=$req->address;
        $std->desc=$req->desc;  
        $std->save();
        return response()->json(["msg"=> "Student details edited Successfully"]);
    }

    function  editTutor(Request $req)//edit tutor form
    {    
        $std = new Tutor();
        $std->exists=true;
        $std->tutor_id=$req->tutor_id;
        $std->name=$req->name;
        $std->username=$req->username;
        $std->email=$req->email;
        $std->phone=$req->phone;
        $std->gender=$req->gender; 
        $std->save();
        return response()->json(["msg"=> "Tutor details edited Successfully"]);
    }

    function  editCourse(Request $req)//edit course form
    {    
        $std = new Course();
        $std->exists=true;
        $std->categories = $req->categories;
        $std->classes = $req->classes;
        $std->subjects = $req->subjects; 
        $std->save();
        return response()->json(["msg"=> "Course edited Successfully"]);
    }
    
    function tsearch(Request $req)//tutor serarch
    {
                $Tutors= Tutor::where('name','Like','%'. $req->search_tea.'%')->get();
                return response()->json($Tutors,200);
    }
    function ssearch(Request $req)//student search
    {
        $Students= Student::where('name','Like','%'. $req->search_stu.'%')->get();
        return response()->json($Students,200);
    }    
      
  function updateStatus($student_id)//student ban
    {
        $update_Students = Student::where('student_id',$student_id)->first();
        
        if($update_Students->status==1)
        {  
            $update_Students->status=0;
            $update_Students->save();
             return response()->json(["msg" =>"Account is banned"]);
        }
        else
        {
            $update_Students->status=1;
            $update_Students->save();
             return response()->json(["msg" =>"Account is activated"]);
        }                
    }

    function updatetStatus($tutor_id)//tutor ban
    {
        $update_Tutors = Tutor::where('tutor_id',$tutor_id)->first();
        if($update_Tutors->status==1)
        {  
            $update_Tutors->status=0;
            $update_Tutors->save();
             return response()->json(["msg" =>"Account is banned"]);
        }
        else
        {
            $update_Tutors->status=1;
            $update_Tutors->save();
             return response()->json(["msg" =>"Account is activated"]);
        }            
    }

    /////////////////////////////////////////Adrita

    function adloginSubmit(Request $req)
    {

        $validator = Validator::make($req->all(),
        [
            'username' => 'required',
            'password'=> 'required',
        ] );

        if($validator->fails())
        {
            return response()->json($validator->errors());
        }

       if($req)
        {
            $admin = Admin::where('username',$req->username)->where('password',$req->password)->first();
            $us = array($admin);
            $key = Str::random(30);
            $token = new Token();
            $token->token_key = $key;
            $token->userid = 1;
            $token->created_at = new Datetime();
            $token->save();
            return response()->json(["token"=>$key,"msg" =>"Login successfully"],200);
        }
       return response()->json(["msg" =>"Incorrect username or password"]);
    }

    function  editAdmin(Request $req)//edit admin form
    {    
        $std = new admin();
        $std->exists=true;
        $std->username=$req->username;
        $std->save();
        return response()->json(["msg"=> "Admin details edited Successfully"]);
    }

    function adsearch(Request $req)//admin search
    {
        $Admins= admin::where('username','Like','%'. $req->search_ad.'%')->get();
        return response()->json($Admins,200);
    }   

    function display()//admin list
    {
            $admins = admin::all();
            return response()->json($admins,200);
    }

    function admin($username)//admin details
    {
            $Admins = admin::where('username',$username)->first();
            return response()->json($Admins,200);
    }

    function sclist()//shedule list
    {
            $Tutors = schedule::all();
            return response()->json($Tutors,200);
            
    }

    function schdel($tutor_id)//schedule delete
    {
            $Tutors= schedule::where('tutor_id',$tutor_id)->delete();
            return response()->json(["msg" =>"Schedule deleted successfully"]);     
    }

    function delete($tutor_id)//tutor delete
    {
            $Tutors= Tutor::where('tutor_id',$tutor_id)->delete();
            return response()->json(["msg" =>"Account deleted"]);
        
    }

    function remove($student_id)//student delete
    {
            $Students= Student::where('student_id',$student_id)->delete();
            return response()->json(["msg" =>"Account deleted"]);     
    }

    function del($username)//admin delete
    {
           $admins= admin::where('username',$username)->delete();
           return response()->json(["msg" =>"Account deleted"]);     
    }

    function addSchedule(Request $req)//schedule form
    { 
        $validator = Validator::make($req->all(),
     [
         'time'=>'required',  
         "date"=>"required", 
         "day"=>"required",     
     ]);
       if($validator->fails())
        {
            return response()->json($validator->errors());
        }
        $app = new schedule();
        $app->time=$req->time;
        $app->date=$req->date;
        $app->day=$req->day;
        $app->save();
        return response()->json(["msg"=> "Schedule added Successfull"]);
    }

    function tklist()//token list
    {
            $token = Token::all();
            return response()->json($token,200);            
    }

    function deltok($id)//token delete
    {
            $Tokens= token::where('id',$id)->delete();
            return response()->json(["msg" =>"Token deleted"]);     
    }

    function logout()
    {
        return response()->json(["msg" =>"Logout Successfully"]);
    }
///////////////////////////////////////////////upload/////////////////////////////////////
   function index()
   {
      return view('multiple_image');  
   }
   function save(Request $req)
   {
    $validator = Validator::make($req->all(),
    
    ["pro_pic"=>"required|mimes:jpeg,png,jpg,gif,svg|max:2048"]);
    if($validator->fails()){
        return response()->json($validator->errors());
    }
     $name =  $req->file('pro_pic')->getClientOriginalName();
     $ext = $req->file('pro_pic')->getClientOriginalExtension();
     $path = "profile_images/";
     $file_name  = time()."_$name";
     $req->file('pro_pic')->storeAs('public/'.$path,$file_name);
       $s1 = new Admin();
       $s1->pro_pic = 'storage/'.$path.$file_name;
       $s1 = Admin::where('username',$req->uname)
       ->update(['pro_pic'=>$req->pro_pic]); 
        return response()->json(["msg" =>'File uploaded Successfully']);
      return back();
    }
}

