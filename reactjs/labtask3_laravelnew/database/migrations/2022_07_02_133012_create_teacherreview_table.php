<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeacherreviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teacherreviews', function (Blueprint $table) {
            $table->id('no')->autoIncrement();
            $table->integer('student_id',50);
            $table->integer('tutor_id',50);
            $table->string('tutorname',100);
            $table->string('feedback', 1500);
            $table->integer('rating',20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teacherreviews');
    }
}
