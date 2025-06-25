import React from "react";
import "./students.css";
import Button from "../../../UI/button/button";
function Student(props) {
  return (
    <div className="students">
      <label>شماره دانش آموزی:{props.id}</label>

      <label>نام و نام خانوادگی</label>
      <input
        type="text"
        name="name"
        value={props.name}
        onChange={(e) => props.changeHandler(e, props.id)}
      />

      <label>کلاس</label>
      <input
        type="text"
        name="classNumber"
        value={props.classNumber}
        onChange={(e) => props.changeHandler(e, props.id)}
      />

      <label>شماره تلفن</label>
      <input
        type="number"
        name="phoneNumber"
        value={props.phoneNumber}
        onChange={(e) => props.changeHandler(e, props.id)}
      />

      <label>ایمیل</label>
      <input
        type="email"
        name="email"
        value={props.email}
        onChange={(e) => props.changeHandler(e, props.id)}
      />
      {/* <label
        style={{ color: "red" }}
        onClick={(e) => props.deleted(e, props.id)}
      >
        حذف
      </label> */}
      <Button btnType="danger" clicked={(e) => props.deleted(e, props.id)}>
        حذف
      </Button>
    </div>
  );
}

export default Student;
