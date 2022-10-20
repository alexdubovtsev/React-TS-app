import React, { FC, useState, useEffect } from "react";
import List from "./List";
import { IUser } from "../Types/Types";
import axios from "axios";
import UserItem from "./UserItem";

const UsersPage: FC = () => {
  // Определяем тип, который должен быть внутри состояния (массив интерфейса пользователя)
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Непонятно что в ответе,поэтому как generic указываем, что ожидаем массив пользователей
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};

export default UsersPage;
