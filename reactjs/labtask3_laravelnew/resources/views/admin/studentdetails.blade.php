@extends('layout.main4')
@section('content')
<h1 align='center'>Show Details</h1>
<div style='color:red'align='center'>
Name:{{$Student->name}}<br><br>
Id: {{$Student->student_id}}<br><br>
Email: {{$Student->email}}<br><br>
Phone: {{$Student->phone}}<br><br>
@endsection