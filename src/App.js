import React, { useState } from "react";
import Students from "./components/students/students/students";
import "./App.css";
import Button from "./components/UI/button/button";

function App() {
  const [students, setStudents] = useState([
    {
      id: 0,
      name: "Mahdi",
      classNumber: 204,
      phoneNumber: 1234,
      email: "reactapp.ir@gmail.com",
    },
    {
      id: 1,
      name: "Alireza",
      classNumber: 214,
      phoneNumber: 12345,
      email: "reactapp.ir@gmail.com",
    },
    {
      id: 2,
      name: "Ali",
      classNumber: 224,
      phoneNumber: 123456,
      email: "reactapp.ir@gmail.com",
    },
    {
      id: 3,
      name: "Amirhossien",
      classNumber: 234,
      phoneNumber: 1234567,
      email: "reactapp.ir@gmail.com",
    },
  ]);

  const [toggle, setToggle] = useState(false);

  const changeHandler = (e, id) => {
    const { name, value } = e.target;
    setStudents((prevstate) =>
      prevstate.map((student) =>
        student.id === id ? { ...student, [name]: value } : student
      )
    );
  };

  const deletStudent = (e, id) => {
    setStudents((prevstate) => prevstate.filter((item) => item.id !== id));
  };

  const togleHandler = () => {
    setToggle((prevstate) => !prevstate);
  };
  return (
    <div className="App">
      <Button btnType="success" clicked={togleHandler}>
        تغییر وضعیت نمایش
      </Button>
      <Students
        studentList={students}
        changeHandler={changeHandler}
        deleted={deletStudent}
        toggle={toggle}
      />
    </div>
  );
}

export default App;
