@extends('layouts.navbar2')
@section('content')
<center>
    <hr>
    <h1>
    Post Page
    </h1>
</hr>

<h4>{{Session::get('msg')}}</h4>
<form action="/addPost" method="POST">
    {{@csrf_field()}} 
    <input type="number" name="id" value="{{session()->get('id')}}" readonly> <br> <br>
    @error('id')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="subject" placeholder="Enter Subject Name"> <br> <br>
    @error('subject')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>    
        <input type="text" name="days" placeholder="Enter Days/week"> <br> <br>
    @error('days')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>    
    <input type="text" name="location" value="{{session()->get('location')}}" readonly> <br> <br>
    @error('location')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="text" name="salary" placeholder="Enter Salary"> <br> <br>
    @error('salary')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br>
        <input type="time" name="time"><br> <br>
    @error('time')
        <span style="color:red">{{$message}}</span><br>
        @enderror<br> 
       <button type="submit">Submit</button>
</form>

</center>
@endsection






