@extends('layouts.navbar3')
@section('content')
<center>
    <hr>
    <h1>
   Review
    </h1>
</hr>
  
<table border="2" width=60%>
    <tr align="center">
        <th >No</th>
        <th>User Name</th>
        <th>Feedback</th>
        <th>Rating</th>
    </tr>

     @foreach($data as $dt)
     <tr align="center">
        <td >{{$dt['no']}}</td>
        <td>{{$dt['username']}}</td>
        <td>{{$dt['feedback']}}</td>
        <td>{{$dt['rating']}}/5</td>
    </tr>
     @endforeach

</table>

</center>
@endsection