@extends('layout.main4')
@section('content')
<body style='background-color:bisque'>
<h2  style='color:blue' align='center'>This is Tutor Details</h2>
<table border="1"align="center">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Id</th>
            <th>Delete</th>
        </tr>
        @foreach($Tutors as $t)
            <tr>
                <td><a href="{{route('Tutor.teacherdetails',
                    ['tutor_id'=>$t->tutor_id,'name'=>$t->name,'email'=>$t->email,])}}">{{$t->name}}</td>
                <td>{{$t->email}}</td>
                <td>{{$t->tutor_id}}</td>               
                <td><a href="/delete/{{$t->tutor_id}}">Delete</a></td>
            </tr>
        @endforeach
    </table>
    @endsection