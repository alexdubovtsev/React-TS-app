import React, { FC, useState } from "react";
import { IUser } from "../Types/Types";

interface userItemProps {
  user: IUser,
  onClick: (user: IUser) => void,
}

const UserItem: FC<userItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ paddingTop: 15, border: "1px solid grey" }}>
      {user.id}. {user.name} lives in {user.address.city} ,{" "}
      {user.address.street} street
    </div>
  );
};

export default UserItem;
