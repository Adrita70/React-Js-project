<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;

    protected $table = "tutors";
    protected $primaryKey = "tutor_id";
    public $incrementing = true;
    public $timestamps = false;

    function student()
    {
        return $this->belongsToMany(Student::class,'stc_mappings','tutor_id','student_id');
    }

    function application()
    {
        return $this->belongsToMany(Application::class,'stc_mappings','tutor_id','app_id');
    }
}
