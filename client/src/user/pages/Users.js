import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jerm Snow",
      image: "https://i.imgflip.com/18ps27.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
