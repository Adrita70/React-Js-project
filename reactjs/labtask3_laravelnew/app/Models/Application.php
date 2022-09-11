<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $table = "applications";
    protected $primaryKey = "app_id";
    public $incrementing = true;
    public $timestamps = false;

    function student()
    {
        return $this->belongsToMany(Student::class,'stc_mappings','app_id','student_id');
    }

    function tutor()
    {
        return $this->belongsToMany(Tutor::class,'stc_mappings','app_id','tutor_id');
    }
}
