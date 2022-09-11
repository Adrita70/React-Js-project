<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Datetime;
use App\Models\Token;
use Illuminate\Support\Facades\mail;
use Illuminate\Support\Facades\DB;
use App\Models\Application;
use App\Models\Admin;
use App\Models\Student;
use App\Models\Feedback;
use App\Models\Tutor;
use App\Models\TeacherReview;
use App\Mail\mailHelperClass;
use PHPUnit\Framework\MockObject\Builder\Stub;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{



    function create(Request $req)
    {
        $Validator = Validator::make($req->all(),
    [
        'name'=>'required|regex:/^[\pL\s\-]+$/',
         'username'=>'required|min:6|unique:students,username',
         'email'=>'required',
         'address'=>'required',
         "password"=>"required|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[@!$#%]).*$/|min:8",
         "phone"=>"required|regex:/^([0]{1}[1]{1}[0-9]{9})+$/i",
         


    ],
    [
        "name.required"=> "Please provide Your name",
        "name.regex"=> "Name is alphabetic",
        "password.required"=> "Please provide Password",
        "password.regex"=>"Password must contain upper case, lower case, number and special characters",
        "password.min"=>"Password must be Longer than 7 characters",
        "phone.regex"=>"Invalid Phone Number Format"
   
    ]
    );

    if($Validator->fails())
    {
        return response()->json($Validator->errors());
    }
    $std = new Student();
    $std->name=$req->name;
    $std->username=$req->username;
    $std->email=$req->email;
    $std->phone=$req->phone;
    $std->address=$req->address;
    $std->desc=$req->desc;
    $std->password=$req->password;
  
    $std->save();

        return response()->json(["msg"=>"Create Successfully", "Info"=>$std]);


    }

    function studentlogin(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "username"=>["required"],
            "password"=>["required"]
        ],
        [

        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $students = Student::all();
        $students = Student::where('username',$req->username)->where('password',$req->password)->first();

        if($students)
        {
            $key = Str::random(60);
            $token = new Token();
            $token->token_key = $key;
            $token->user_id = $students->student_id;
            $token->created_at = new Datetime();
            $token->save();
            return response()->json(["token"=>$key,"data"=>$students]);           
        }
        else
        {
            return response()->json(["msg"=>"Invalid Username password"]);
        }
    }

    function logout(Request $req)
    {
        if($req->token_key != NULL)
        {
            $key = $req->token_key;
            $tk = Token::where("token_key",$key)->first();
            $tk->expired_at = new Datetime();
            $tk->save();
            return response()->json(["msg"=>"Token Finished"]);
        }
    }

    function updateprofile(Request $reg)
    {
        $Validator = Validator::make($reg->all(),
    [
        'name'=>'required|regex:/^[\pL\s\-]+$/',
         'username'=>'required|min:6',
         'email'=>'required',
         'address'=>'required',
         "password"=>"required|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[@!$#%]).*$/|min:8",
         "phone"=>"required|regex:/^([0]{1}[1]{1}[0-9]{9})+$/i",
         


    ],
    [
        "name.required"=> "Please provide Your name",
        "name.regex"=> "Name is alphabetic",
        "password.required"=> "Please provide Password",
        "password.regex"=>"Password must contain upper case, lower case, number and special characters",
        "password.min"=>"Password must be Longer than 7 characters",
        "phone.regex"=>"Invalid Phone Number Format"
   
    ]
    );

    if($Validator->fails())
    {
        return response()->json($Validator->errors());
    }
    $st = new Student();
            $st = Student::where('username',$reg->username)
            ->update(['name'=>$reg->name,'username'=>$reg->username,'phone'=>$reg->phone,'email'=>$reg->email,'address'=>$reg->address,
        'desc'=>$reg->desc,'password'=>$reg->password]);
    return response()->json(["msg"=>"Update Successfully", "Info"=>$st]);


    }


    function addfeedback(Request $reg)
    {
        $Validator = Validator::make($reg->all(),
    [
                'username'=>'required',
                'feedback'=>'required',
                'rating'=>'required',
         


    ]
    );

    if($Validator->fails())
    {
        return response()->json($Validator->errors());
    }
           $feed = new Feedback();
           $feed->username=$reg->username;
           $feed->feedback=$reg->feedback;
           $feed->rating=$reg->rating;
           $feed->save();
  
          $feed->save();

        return response()->json(["msg"=>"Feedback Successfull"]);


    }

    function teacherlist()
    {
            $Tutors = Tutor::all();
            return response()->json($Tutors,200);
    }

    function teachersearch(Request $req)
    {


        $validator = Validator::make($req->all(),
        [
            "tutor_id"=>"required|exists:tutors,tutor_id"
        ],
        [
            "tutor_id.exists"=> "Tutor not found"
        ]);

        $ts = Tutor::where('tutor_id',$req->tutor_id)->get();
        return response()->json(["Info"=>$ts]);
    }

    function application(Request $reg)
    {
        $Validator = Validator::make($reg->all(),
        [
            'student_id'=>'required',
            'subject'=>'required',
            'days_week'=>'required|regex:/^([3-6]{1})+$/i',
            'address'=>'required',
            "salary"=>"required|regex:/^[0-9]+$/",
            "time"=>"required",
            
       
        ],
        [
            "days.regex"=> "Must be between 3-6 days",
            "salary.regex"=> "Only Number",
            
       
        ]
    );

    if($Validator->fails())
    {
        return response()->json($Validator->errors());
    }
    $app = new Application();
    $app->student_id=$reg->student_id;
    $app->subject=$reg->subject;
    $app->days_week=$reg->days_week;
    $app->location=$reg->address;
    $app->salary=$reg->salary;
    $app->time=$reg->time;
    $app->cond='r';
    $app->save();

        return response()->json(["msg"=>"Post Successfull"]);


    }

    function mypost(Request $req)
    {
        $ts = Application::where('student_id',$req->student_id)->get();
        return response()->json(["Info"=>$ts]);
    }




}


