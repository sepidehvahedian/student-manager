import React from "react";
import Student from "./student/student";
import PropTypes from 'prop-types';

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
export default React.memo(Students);
Students.propTypes = {
  studentsList: PropTypes.array.isRequired,
  nameChanged: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};
