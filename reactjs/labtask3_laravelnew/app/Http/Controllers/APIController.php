<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;
use App\Models\Token;
use Illuminate\Support\Str;
use Datetime;
class APIController extends Controller
{
    
    function list()
    {
        $sts = Student::all();
        return response()->json($sts);
    }

    function hello()
    {
        $st = array("id"=>1, "name"=>"Tanvir","Dob"=>"12.12.12");
        $st = (object)$st;
        return response()->json($st);
    }

    function create(Request $req)
    {
        $validator = Validator::make($req->all(),
        [
            "name"=>"required",
            "dob"=>"required"
        ],
        [
            "name.required"=>"Please provide name"
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors(),422);
        }
        $st = new Student();
        $st->name = $req->name;
        $st->dob = $req->dob;
        $st->save();
        return response()->json(["msg"=>"Success","data"=>$st]);
    }







    function login(Request $req){
        if($req->uname=="tanvir" && $req->pass=="1234"){
            $key = Str::random(67);
            $token = new Token();
            $token->token_key = $key;
            $token->user_id = 1;
            $token->created_at = new Datetime();
            $token->save();
            return response()->json(["token"=>$key],200);
        }
        return response()->json(["msg"=>"Invalid Username password"]);
    }

    function logout(Request $req)
    {
        $key = $req->token;
        if($key){
            $tk = Token::where("token_key",$key)->first();
            $tk->expired_at = new Datetime();
            $tk->save();
        }
    }
}
