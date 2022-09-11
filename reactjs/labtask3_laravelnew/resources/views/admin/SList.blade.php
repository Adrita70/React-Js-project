@extends('layout.main4')
@section('content')
<body style='background-color:bisque'>
<h2 align='center'>This is Student Details</h2>
<table border="1"align="center">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Id</th>
            <th>Phone Number</th>
            <th>Delete</th>
            <th>Banned</th>
        </tr>
        @foreach($Students as $t)
            <tr>
                <td><a href="{{route('Student.studentdetails',['student_id'=>$t->student_id,
                    'name'=>$t->name,'email'=>$t->email,'phone'=>$t->phone])}}">
                {{$t->name}}</td>
                <td>{{$t->email}}</td>
                <td>{{$t->student_id}}</td>
                <td>{{$t->phone}}</td>
                <td><a href="/remove/{{$t->student_id}}">Delete</a></td>
               @if($t->status==1)
                <td><a href="{{route('students.status.update',
                    ['student'=>$t->student_id,'status_code'=>0])}}">Banned</a></td>
                @else
                    <td><a href="{{route('students.status.update',
                    ['student'=>$t->student_id,'status_code'=>1])}}">Permit</a></td>
               @endif
               
            </tr>
        @endforeach
    </table>
</body>
    @endsection