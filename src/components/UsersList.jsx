import React from "react";
import UserCard from "./UserCard";

const UsersList = ({ users, deleteUser, handleClickEdit }) => {
  return (
    <section className="flex flex-row flex-wrap gap-10 justify-center py-5">
      {users.map((user) => (
        <UserCard key={user.id} user={user} deleteUser={deleteUser}
        handleClickEdit={handleClickEdit} />
      ))}
    </section>
  );
};

export default UsersList;
