import moment from "moment/moment";
import React from "react";

const Datacard = ({ data, text, settext }) => {
  console.log(text);
  if (text === 1) {
    return (
      <p>
       Hi, My name is <br/> <h3> {data.name.title} {data.name.first} {data.name.last}</h3>
      </p>
    );
  } else if (text === 2) {
    return (
      <p>
       My email address is: <br/> <h3>{data.email}</h3> 
      </p>
    );
  } else if (text === 3) {
    return (
        <p>
      My birthday is: <br/> <h3> {moment(data.dob.date).format('MMMM Do YYYY')} </h3> 
       </p>
    );
  } else if (text === 4) {
    return (
        <p>
       My address is: <br/> <h3>{data.location.city}</h3> 
       </p>
    );
  } else if (text === 5) {
    return (
        <p>
       My phone number is: <br/> <h3>{data.phone}</h3> 
       </p>
    );
  } else if (text === 6) {
    return (
        <p>
        My password is: <br/> <h3>{data.login.password}</h3> 
       </p>
    );
  }
};

export default Datacard;
