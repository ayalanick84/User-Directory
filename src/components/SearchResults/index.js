import React from "react";

function SearchResult({ name, image, phone, email, age }) {
  return (
    <div className="card">
      <div>
        <div className="img-container">
          <img alt={name} src={image} />
        </div>
        <div className="content">
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

export default SearchResult;
