@extends('layouts.navbar1')
@section('content')
<center>
    <hr>
    <h1>
   Login Page
    </h1>
</hr>

<h4>{{Session::get('msg')}}</h4>
<form action="/login" method="POST">
    @csrf 
    <input type="text" name="username" placeholder="Enter Your User name"> <br>
    @error('username')
        <span style="color:red">{{$message}}</span>
        @enderror<br><br>

        <input type="password" name="password" placeholder="Enter Password"> <br>
    @error('password')
        <span style="color:red">{{$message}}</span>
        @enderror<br><br>
    <button type="submit">Login</button>
</form>

</center>
@endsection