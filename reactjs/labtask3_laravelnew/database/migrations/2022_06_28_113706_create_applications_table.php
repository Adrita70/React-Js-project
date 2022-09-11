<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->integer('app_id')->autoIncrement();
            $table->integer('teacher_id');
            $table->integer('student_id');
            $table->string('subject', 50);
            $table->integer('days_week');
            $table->string('location', 150);
            $table->integer('salary');
            $table->time('time');
            $table->string('cond',5);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applications');
    }
}
