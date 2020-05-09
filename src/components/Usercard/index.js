import React from "react";
import "./style.css";

function UserCard({ name, image, phone, email, age }) {
  return (
    <div className="card">
      <div>
        <div className="card-img-top">
          <img alt={name} src={image} />
        </div>
        <div className="card-body">
          <ul>
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Age:</strong> {age}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
