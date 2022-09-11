@extends('layouts.navbar2')
@section('content')
<h2 align='center'> Tutor List</h2>

@foreach($tutor as $t)    
    <div style="border: 5px solid black; font-size: 22px">
        <p align="center">
            Application ID: {{$t->app_id}}
            <br>
            Student ID: {{$t->student_id}}
            <br>
            Tutor ID: {{$t->teacher_id}}
            <br>
            Subject: {{$t->subject}}
            <br>
            Days/Week: {{$t->days_week}}
            <br>
            Location: {{$t->location}}
            <br>
            Salary: {{$t->salary}}
            <br>
            Time: {{$t->time}}
            <br><br>
        </p>
    </div>
        
@endforeach
{{ $tutor->links() }}
    @endsection

      
    