import React from "react";
import "./newStudent.css";
import Button from "../../UI/button/button";
function NewStudent(props) {
  return (
    <div className="newStudent">
      <div>
        <h1>اضافه کردن دانش آموز</h1>
        <label>نام و نام خانوادگی</label>
        <input type="text"  />
        <label>کلاس</label>
        <input type="text"  />
        <label>شماره تلفن</label>
        <input type="text" />
        <label>ایمیل</label>
        <input type="text" />
        <Button clicket={()=>alert('add student')} btnType="danger">اضافه کردن</Button>
      </div>
    </div>
  );
}

export default NewStudent;
