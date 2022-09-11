@extends('layout.main4')
@section('content')
<h1 align='center'>Show Details</h1>
<div style='color:red'align='center'>
Name:{{$Tutor->name}}<br><br>
Id: {{$Tutor->tutor_id}}<br><br>
Email: {{$Tutor->email}}<br><br>
</div>
@endsection