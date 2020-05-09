import React, { useState, useEffect } from "react";
import UserCard from "../components/Usercard";
import API from "../utils/API";

function DirectoryContainer() {
  // Setting this.state.friends to the friends json array
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    API.makeUsers()
      .then((res) =>
        setUsers(
          res.data.results.map((res) => ({
            name: `${res.name.first} ${res.name.last}`,
            email: res.email,
            phone: res.phone,
            age: res.dob.age,
            image: res.picture.large,
            id: res.id.value,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  // Map over this.state.friends and render a FriendCard component for each
  // friend object
  function renderUsers() {
    return users.map((user) => {
      return (
        <UserCard
          key={user.id}
          name={user.name}
          image={user.image}
          phone={user.phone}
          email={user.email}
          age={user.age}
        />
      );
    });
  }

  return <div>{renderUsers()}</div>;
}

export default DirectoryContainer;
