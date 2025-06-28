import React, { useEffect, useState } from "react";
import Students from "./components/students/students/students";
import "./App.css";
import Button from "./components/UI/button/button";
import NewStudent from "./components/students/newStudent/newStudent";
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

  const [searchBarValue, setSearchBarValue] = useState("");

  const [arrayHolder, setArrayHolder] = useState();

  const [newStudents, setNewStudents] = useState({
    name: "",
    classNumber: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    setArrayHolder(students);
  }, []);

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

  const searchFilterFunction = (e) => {
    const value = e.target.value;
    setSearchBarValue(value);

    if (!value) {
      setStudents(arrayHolder);
      return;
    }

    const results = arrayHolder.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setStudents(results);
  };

  const inputHandler = (e) => {
    setNewStudents((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addStudentHandler = () => {
    setStudents((prev) => [...prev, { id: prev.length, ...newStudents }]);
    setNewStudents({ name: "", classNumber: "", phoneNumber: "", email: "" });
  };
  return (
    <div className="App">
      <NewStudent
        name={newStudents.name}
        classNumber={newStudents.classNumber}
        phoneNumber={newStudents.phoneNumber}
        email={newStudents.email}
        inputHandler={inputHandler}
        addStudentHandler={addStudentHandler}
      />
      <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterFunction}
      />
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
