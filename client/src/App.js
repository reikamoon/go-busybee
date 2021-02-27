import React from "react";
import "./App.css";
// import the Container Component from the semantic-ui-react
import { Container } from "semantic-ui-react";
// import the ToDoList component
import ToDoList from "./components/To-Do-List/To-Do-List";
// import the AssignmentList component
import AssignmentList from "./components/Assignment-List/Assignment-List";
// import Header from Header component
import Header from "./components/Header/Header";


function App() {
  const date = new Date();
  const year = date.getFullYear();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var month = new Array(11);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var day = weekday[date.getDay()]
  var currentmonth = month[date.getMonth()]
  var dd = String(date.getDate()).padStart(2, '0');

  return (
    <div>
      <Header />
      <center>
      <h1>Today is {day}, {currentmonth} {dd}, {year}. Here are your tasks for today: </h1>
      <br/>
      </center>
      <Container>
        <ToDoList />
      </Container>
      <br/>
      <br/>
      <center>
      <h1>My Assignments</h1>
      </center>
      <Container>
      <AssignmentList />
      </Container>
    </div>
  );
}
export default App;