import "./styles.css";
import { useState } from "react";

export default function Home() {
  function myProfile(){
    //go to profile page
  }
  return (
    <>
    <div className="Home">
      <h2>Welcome to "name"</h2>
      <h4>Your services:</h4>
      <ol>
        <li>first task</li> <tb># of hours</tb>
        <li>second task</li> <tb># of hours</tb>
        <li>third task</li> <tb># of hours</tb>
      </ol>
      <h4>Reminders</h4>
      <ol>
        <li>first event</li> <tb>time</tb>
        <li>second event</li> <tb>time</tb>
        <li>third event</li> <tb>time</tb>
      </ol>
    </div>
    <div className="Home">
      <button onclick = "myProfile()">Profile</button>
      
    </div>
    </>
  );
}

