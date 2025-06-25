import React from "react";
import Student from "./student/student";

function Students(props) {
  const { changeHandler, deleted } = props;
 

  if (props.toggle) {
    return (
      <div className="student-section">
        {props.studentList.map((student, index) => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            classNumber={student.classNumber}
            phoneNumber={student.phoneNumber}
            email={student.email}
            changeHandler={changeHandler}
            deleted={deleted}
          />
        ))}
      </div>
    );
  }
  return props.studentList.map((student, index) => {
    return (
      <Student
        key={student.id}
        id={student.id}
        name={student.name}
        classNumber={student.classNumber}
        phoneNumber={student.phoneNumber}
        email={student.email}
        changeHandler={changeHandler}
        deleted={deleted}
      />
    );
  });
}

export default Students;
