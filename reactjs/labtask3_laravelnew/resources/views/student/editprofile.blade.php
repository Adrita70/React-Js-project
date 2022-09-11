@extends('layouts.navbar2')
@section('content')
<center>
    <hr>
    <h1>
 Edit Profile
    </h1>
</hr>

<h4>{{Session::get('msg')}}</h4>
<form action="/editprofile" method="POST" enctype="multipart/form-data">
    @csrf 
    <input type="text" name="name"  value="{{Session()->get('name')}}"> <br> <br>
    @error('name')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="username" value="{{Session()->get('user')}}" readonly> <br> <br>
    @error('username')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>    
        <input type="text" name="phone" value="{{Session()->get('phone')}}"> <br> <br>
    @error('phone')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>    
    <input type="email" name="email" value="{{Session()->get('email')}}"> <br> <br>
    @error('email')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="address" value="{{Session()->get('location')}}"> <br> <br>
    @error('address')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="desc" value="{{Session()->get('desc')}}" ><br> <br>
    @error('desc')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br> 
        <input type="password" name="password" value="{{Session()->get('password')}}"> <br> <br>
    @error('password')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>  
        <input type="file" name="image"> <br> <br>  
        @error('image')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>  
    <button type="submit">Save</button>
</form>


</center>
@endsection