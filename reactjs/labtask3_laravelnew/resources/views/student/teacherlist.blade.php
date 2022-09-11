@extends('layouts.navbar2')
@section('content')
<h2 align='center'> Tutor List</h2>
<table border="1"align="center" width=60%>
        <tr>
            <th>Tutor ID</th>
            <th>Tutor Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Operation</th>
        </tr>
        @foreach($Tutors as $t)
            <tr>
                <td>{{$t->tutor_id}}</td>
                <td>{{$t->name}}</td>
                <td>{{$t->email}}</td>
                <td>{{$t->phone}}</td>
                <td>{{$t->gender}}</td>
                <td align="center"><a href="{{route('student.tutor',['id'=>$t->tutor_id,'name'=>$t->name])}}">Review</a></td>
            </tr>
        @endforeach
    </table>
    @endsection