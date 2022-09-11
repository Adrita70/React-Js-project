@extends('layouts.navbar2')
@section('content')
<center>
    <hr>
    <h1>
 Profile
    </h1>
</hr>

<h4>{{Session::get('msg')}}</h4>


  
<div>
    <img src="{{$students->image}}" alt="student-image">
</div>

   <table border="3" width=30%>
       <tr>
           <td>Name :</td>
           <td>{{Session()->get('name')}}</td>
       </tr>
       <tr>
           <td>User Name :</td>
           <td>{{Session()->get('user')}}</td>
       </tr>
       <tr>
           <td>Phone Number :</td>
           <td>{{Session()->get('phone')}}</td>
       </tr>
       <tr>
           <td>Email :</td>
           <td>{{Session()->get('email')}}</td>
       </tr>
       <tr>
           <td>Location :</td>
           <td>{{Session()->get('location')}}</td>
       </tr>
   </table>
   <br>

   <a href="/editprofile">Edit Profile</a>
   
    

</center>
@endsection