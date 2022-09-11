@extends('layouts.navbar2')
@section('content')
<center>
    <hr>
    <h1>
   Feedback Page
    </h1>
</hr>

<h4>{{Session::get('msg')}}</h4>
<form action="/addfeedback" method="POST">
    @csrf 
    <input type="text" name="username" value="{{Session()->get('user')}}" readonly> <br>
    @error('username')
        <span style="color:red">{{$message}}</span>
        @enderror<br><br>
    <textarea name="feedback"  rows = "15" cols = "100"  placeholder="Write Your Feedback Here!"></textarea><br>
    @error('feedback')
        <span style="color:red">{{$message}}</span>
        @enderror<br><br>
        <label>Rating</label><br>
        <input type="radio" name="rating" value="1"/>1
        <input type="radio" name="rating" value="2"/>2
        <input type="radio" name="rating" value="3"/>3
        <input type="radio" name="rating" value="4"/>4
        <input type="radio" name="rating" value="5"/>5
        <br>
        @error('rating')
        <span style="color:red">{{$message}}</span>
        @enderror<br><br>
       
    <button type="submit">Submit</button>
</form>

</center>
@endsection