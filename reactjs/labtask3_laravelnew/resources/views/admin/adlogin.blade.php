@extends('layout.main3')
@section('content')
<body style='background-color:pink'>
<h1 Style='color:black'align='center'>Admin Login</h1>
<div style='color:red'align='center'>
<form class="login" action="" method="post">
    {{@csrf_field()}}
    <b>User Name :</b> <input type="text" value="{{old('username')}}" name="username"> </br><br>
    @error('username')
        <span class="text-danger">{{$message}}</span><br><br>
    @enderror
    <b>Password: </b><input type="password" name="password"></br><br>
    @error('password')
        <span class="text-danger">{{$message}}</span><br><br>
    @enderror
    <input type="submit" value="Login">
</form>
</div>
</body>
@endsection
