import React from 'react'

const date = new Date();
const time = date.getHours();
let greeting;
const customStyle = {color: ""};

if(time < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if(time < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "purple";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue"; 
  };

const Greeting = () => {
  return (
    <div>
      <p style={{color: customStyle.color}}>{greeting}</p>
    </div>
  );
}

export default Greeting