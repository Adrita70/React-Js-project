@extends('layouts.navbar2')
@section('content')
<center>
    <hr>
    <h1>
   Feedback Page
    </h1>
</hr>

<h4>{{Session::get('msg')}}</h4>
<form action="/teacherfeedback" method="POST">
    @csrf 
    <label>Student Id :</label><br>
    <input type="text" name="student_id" readonly value={{Session()->get('id')}}> <br>
    @error('student_id')
        <span style="color:red">{{$message}}</span>
        @enderror<br><br>
        <label>Tutor  Id :</label><br>
        <input type="text" name="tutor_id" readonly  value="{{$Tutors->tutor_id}}"  ><br>
    @error('tutor_id')
        <span style="color:red">{{$message}}</span>
        @enderror<br><br>
        <label>Tutor Name :</label><br>
        <input type="text" name="tutor_name" readonly value="{{$Tutors->name}}" > <br>
    @error('tutor_name')
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