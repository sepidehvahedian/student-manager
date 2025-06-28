import React, { useState } from "react";
import "./newStudent.css";
import Button from "../../UI/button/button";
function NewStudent(props) {
  
  return (
    <div className="newStudent">
      <div>
        <h1>اضافه کردن دانش آموز</h1>
        <label>نام و نام خانوادگی</label>
        <input type="text" name={"name"} value={props.name} onChange={props.inputHandler} />
        <label>کلاس</label>
        <input type="text" name={"classNumber"} value={props.classNumber} onChange={props.inputHandler} />
        <label>شماره تلفن</label>
        <input type="number" name={"phoneNumber"} value={props.phoneNumber} onChange={props.inputHandler} />
        <label>ایمیل</label>
        <input type="email" name={"email"} value={props.email} onChange={props.inputHandler} />
        <Button clicked={props.addStudentHandler} btnType="danger">
          اضافه کردن
        </Button>
      </div>
    </div>
  );
}

export default NewStudent;
