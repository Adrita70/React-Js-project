<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Course;
use App\Models\Application;
use App\Models\TeacherReview;
use App\Models\Otp;
use Illuminate\Support\Facades\Validator;
use App\Models\Token;
use Illuminate\Support\Str;
use Datetime;
use App\Models\Tutor;
use Illuminate\Support\Facades\mail;
use Illuminate\Support\Facades\DB;
use App\Mail\mailHelperClass;


class TeacherController extends Controller
{
    /*function home()
    {
        return view('tutor.home')
    }

    
    function editProfile()
    {
        return view('tutor.editprofile')
    }

    function editProfileSubmit(Request $req)
    {
        $req->validate
        (
            [
                "name"=>["required","regex:/^[\pL\s]+$/u"],
                "email"=>["required", "email:rfc,dns"],
                "gender"=>["required"],
                "phone"=>["required","regex:/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/"]
            ],
            [
                "name.regex"=> "Name must be alphabetic",
                "email.regex"=> "Email is invalid",
                "phone.regex"=> "Phone number is invalid"
            ]
        );

        $tu = new Tutor();
        $tu = Tutor::where('username', session()->get('username'))->update(['name' => $req->name, 'phone' => $req->phone, 'email' => $req->email, 'gender' => $req->gender]);

        if($tu>0)
        {
            $req->session()->put('email', $req->email);
            $req->session()->put('name', $req->name);
            $req->session()->put('gender', $req->gender);
            $req->session()->put('phone', $req->phone);

            session()->flash('ma','Profile Updated');
            return redirect()->route('tutorprofile');
        }
        else
        {
            session()->flash('ma','Nothing was updated');
            return redirect()->route('tutorprofile');
        }
    }*/

    
   

  
    function login(Request $req)
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

        $tutors = Tutor::all();
        $tutors = Tutor::where('username',$req->username)->where('password',$req->password)->first();
        
        if($tutors != null)
        {
            $key = Str::random(60);
            $token = new Token();
            $token->token_key = $key;
            $token->user_id = $tutors->tutor_id;
            $token->created_at = new Datetime();
            $token->save();
            return response()->json(["token"=>$key,"data"=>$tutors]);           
        }
        else
        {
            return response()->json(["password"=>array("Invalid Username or Password")], 422);
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

    function createSubmit(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "name"=>["required","regex:/^[\pL\s]+$/u"],
            "username"=>["required","unique:tutors,username"],
            "email"=>["required"],
            "gender"=>["required"],
            "phone"=>["required","regex:/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/"],
            "password"=>["required","min:8","regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/"],
            "cpassword"=>["required","same:password"],
            "file"=>"image|mimes:jpeg,png,jpg,gif,svg|max:2048"
        ],
        [
            "name.regex"=> "Name must be alphabetic",
            "username.unique"=> "Username has been taken",
            "password.min"=> "Password has to be more than 8 characters",
            "email.regex"=> "Email is invalid",
            "phone.regex"=> "Phone number is invalid",
            "password.regex"=> "Password must contain upper case, lower case, number and special 
            characters",
            "cpassword.required"=> "Please confirm your password",
            "cpassword.same"=> "Passwords do not match!",
            "file.mimes"=>"Only Image File"
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }
        
        if($req->hasfile('file'))
        {
            $key = Str::random(10);
            $orgName = $key.$req->file->getClientOriginalName();
            $req->file->move(public_path('storage/tutorpics/'), $orgName);

            $t1 = new Tutor();
            $t1->name = $req->name;
            $t1->username = $req->username;
            $t1->gender = $req->gender;
            $t1->phone = $req->phone;
            $t1->email = $req->email;
            $t1->password = $req->password;
            $t1->image = $orgName;
            $t1->save();
            
            return response()->json(["msg"=>"New Account Registered!","data"=>$t1]);
        }
        else
        {
            $t1 = new Tutor();
            $t1->name = $req->name;
            $t1->username = $req->username;
            $t1->gender = $req->gender;
            $t1->phone = $req->phone;
            $t1->email = $req->email;
            $t1->password = $req->password;
            $t1->image = "No_image.png";
            $t1->save();

            return response()->json(["msg"=>"New Account Registered","data"=>$t1]);
        }
    }

    function editProfileSubmit(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "name"=>["required","regex:/^[\pL\s]+$/u"],
            "email"=>["required"],
            "gender"=>["required"],
            "phone"=>["required","regex:/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/"]
        ],
        [
            "name.regex"=> "Name must be alphabetic",
            "email.regex"=> "Email is invalid",
            "phone.regex"=> "Phone number is invalid"
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $tu = new Tutor();
        $tu = Tutor::where('username', $req->username)->update(['name' => $req->name, 'phone' => $req->phone, 'email' => $req->email, 'gender' => $req->gender]);

        $ti = new Tutor();
        $ti = Tutor::where('username', $req->username)->first();

        if($tu>0)
        {
            return response()->json(["msg"=>"Profile Updated","data"=>$ti]);
        }
        else
        {
            return response()->json(["msg"=>"Nothing was updated","data"=>$ti]);
        }
    }

    function changeForgotPasswordSubmit(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "npassword"=>["required","min:8","regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/"],
            "cpassword"=>["required","same:npassword"]
        ],
        [
            "npassword.required"=> "Please enter new password",
            "cpassword.required"=> "Please confirm your password",
            "npassword.min"=> "Password has to be more than 8 characters",
            "npassword.regex"=> "Password must contain upper case, lower case, number and special characters",
            "cpassword.same"=> "Passwords do not match!"
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $cpw = new Tutor();
        $cpw = Tutor::where('username', $req->username)->update(['password' => $req->npassword]);

        return response()->json(["msg"=>"Successful!"]);
    }

    function changePasswordSubmit(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "opassword"=>["required"],
            "password"=>["required","min:8","regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/"],
            "cpassword"=>["required","same:password"]
        ],
        [
            "password.min"=> "Password has to be more than 8 characters",
            "password.regex"=> "Password must contain upper case, lower case, number and special characters",
            "cpassword.same"=> "Passwords do not match!"
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $cpw = new Tutor();
        $cpw = Tutor::where('username', $req->username)->update(['password' => $req->password]);

        if($cpw>0)
        {
            return response()->json(["msg"=>"Password Changed"]);
        }
        else
        {
            return response()->json(["msg"=>"Password Unchanged"]);
        }
    }

    function getJobs()
    {
        $t = Application::all();
        $t = Application::where('cond', 'r')->get();
        
        return response()->json(["data"=>$t]);
    }

    function myJobs(Request $req)
    {
        $t = Application::all();
        $t = Application::where('teacher_id', $req->tutor_id)->get();
        
        return response()->json(["data"=>$t]);
    }

    function myFeedbacks(Request $req)
    {
        $t = TeacherReview::all();
        $t = TeacherReview::where('tutor_id', $req->tutor_id)->get();
        
        return response()->json(["msg"=>"Feedbacks Found","data"=>$t]);
    }

    function forgotPasswordSubmit(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "username"=>["required"]
        ],
        []);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $t = Tutor::all();
        $t = Tutor::where('username', $req->username)->first();

        if($t)
        {
            return response()->json(["data"=>$t]);
        }
        else
        {
            return response()->json(["username"=>array("No such username exists!")], 422);
        }
    }

    function verify(Request $req)
    {
        $otp = rand(100000,999999);

        Mail::to($req->email)->send(new mailHelperClass('Account Verification',$otp));

        $o1 = new Otp();
        $o1->otp = $otp;
        $o1->save();

        return response()->json(["msg"=>"A verification code has been sent to your email."]);
    }

    function verifySubmit(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "otp"=>["required"]
        ],
        []);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $ot = Otp::all();
        $ot = Otp::where('otp', $req->otp)->delete();

        if($ot>0)
        {            
            return response()->json(["msg"=>"Successful!"]);
        }
        else
        {
            return response()->json(["otp"=>array("Wrong OTP. Try again!")], 422);
        }
    }

    function getJobsSubmit(Request $req)
    {
        $t = Application::all();
        $t = Application::where('app_id', $req->app_id)->update(['teacher_id' => $req->teacher_id, 'cond' => 'a']);
        
        if($t>0)
        {
            return response()->json(["msg"=>"New Job Accepted"]);
        }
        else
        {
            return response()->json(["msg"=>"Sorry! An Error Occurred"], 422);
        }
        
    }

    function getTeacher(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "id"=>"required|exists:tutors,tutor_id"
        ],
        [
            "id.exists"=> "Tutor not found"
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors());
        }

        $t = Tutor::all();
        $t = Tutor::where('tutor_id',$req->id)->first();
        return response()->json(["msg"=>"Found","data"=>$t]);
    }

    function deleteTeacher(Request $req)
    {
        $t = Tutor::all();
        $t = Tutor::where('tutor_id', $req->id)->delete();

        $t = Tutor::all();
        return response()->json(["msg"=>"Account Deleted","data"=>$t]);
    }

    function updatePassword(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "opassword"=>["required"],
            "npassword"=>["required","min:8","regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/"],
            "cpassword"=>["required","same:npassword"]
        ],
        [
            "opassword.required"=> "You must enter the old password",
            "npassword.required"=> "You must enter the new password",
            "cpassword.required"=> "Please confirm your password",
            "npassword.min"=> "Password has to be more than 8 characters",
            "npassword.regex"=> "Password must contain upper case, lower case, number and special 
            characters",
            "cpassword.same"=> "Passwords do not match!"
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $t = Tutor::all();
        $t = Tutor::where('tutor_id', $req->id)->first();

        if($t->password === $req->opassword)
        {
            $t = Tutor::all();
            $t = Tutor::where('tutor_id', $req->id)->update(['password' => $req->npassword]);

            if($t>0)
            {
                $t = Tutor::all();
                $t = Tutor::where('tutor_id', $req->id)->first();
                return response()->json(["msg"=>"Password Changed","data"=>$t]);
            }
            else
            {
                return response()->json(["msg"=>"Nothing was updated"]);
            }
        }

        return response()->json(["opassword"=>array("Old Password Doesn't match")], 422);
    }

    function createCourseSubmit(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "categories"=>["required"],
            "classes"=>["required"],
            "subjects"=>["required"]
        ],
        [

        ]);

        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $c1 = new Course();
        $c1->categories = $req->categories;
        $c1->classes = $req->classes;
        $c1->subjects = $req->subjects;
        $c1->save();
        
        return response()->json(["msg"=>"New Course Registered","data"=>$c1]);
    }

    function getCourse(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "category"=>"required"
        ],
        [
            
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors());
        }

        $c = Course::all();
        $c = Course::where('categories',$req->category)->get();
        return response()->json(["msg"=>"Found","data"=>$c]);
    }

    function getAllCourse(Request $req)
    {
        $c = Course::all();
        return response()->json(["data"=>$c]);
    }
    
    function deleteCourse(Request $req)
    {
        $c = Course::all();
        $c = Course::where('course_id', $req->id)->delete();

        $c = Course::all();
        return response()->json(["msg"=>"Course Deleted","data"=>$c]);
    }


    function updateCourse(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "categories"=>["required"],
            "classes"=>["required"],
            "subjects"=>["required"]
        ],
        [

        ]);

        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }

        $c = Course::all();
        $c = Course::where('course_id', $req->id)->update(['categories' => $req->categories, 'classes' => $req->classes, 'subjects' => $req->subjects]);

        if($c>0)
        {
            return response()->json(["msg"=>"Course updated","data"=>$c]);
        }
        else
        {
            return response()->json(["msg"=>"Nothing was updated"]);
        }
    }

    function getCourseById(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "id"=>"required"
        ],
        [
            "id.exists"=> "Tutor not found"
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors());
        }

        $c = Course::all();
        $c = Course::where('course_id',$req->id)->first();
        return response()->json(["msg"=>"Found","data"=>$c]);
    }
}