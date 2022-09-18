import React from "react";

const UserList = ({ users }) => {
  if (!users) return null; // not good for real world scenario, should show appropriate message
  if (!users.length) return <p>no users found!!</p>;

  return (
    <>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default UserList;
