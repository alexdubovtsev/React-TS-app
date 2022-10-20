import React, { FC, useState } from "react";
import { IUser } from "../Types/Types";

interface userItemProps {
  user: IUser;
}

const UserItem: FC<userItemProps> = ({ user }) => {
  return (
    <div style={{ paddingTop: 15, border: "1px solid grey" }}>
      {user.id}. {user.name} lives in {user.address.city} ,{" "}
      {user.address.street} street
    </div>
  );
};

export default UserItem;
