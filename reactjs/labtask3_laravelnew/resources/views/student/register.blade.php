@extends('layouts.navbar1')
@section('content')
<center>
 <hr>
    <h1>
    Registration Page
    </h1>
</hr>


<div >
<form action="/register" method="POST" >
    @csrf 
    <input type="text" name="name" placeholder="Enter Your Name"> <br> <br>
    @error('name')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="username" placeholder="Enter Your User Name"> <br> <br>
    @error('username')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>    
        <input type="text" name="phone" placeholder="Enter Your Phone Number"> <br> <br>
    @error('phone')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>    
    <input type="email" name="email" placeholder="Enter Your Email"> <br> <br>
    @error('email')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="address" placeholder="Enter Your Address"> <br> <br>
    @error('address')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="desc" placeholder="Enter Description(Optional)" ><br> <br>
    @error('desc')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br> 
        <input type="password" name="password" placeholder="Enter Password"> <br> <br>
    @error('password')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>    
        
    <button type="submit">Sign Up</button>
</form>
</div>



</center>
@endsection