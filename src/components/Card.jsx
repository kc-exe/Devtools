import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img}></Avatar>
      </div>
      <Details tel={props.tel} email={props.email}></Details>
    </div>
  );
}

export default Card;
