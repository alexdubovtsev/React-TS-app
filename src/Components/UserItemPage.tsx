import React, { FC, useState, useEffect } from "react";
import { IUser } from "../Types/Types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // id будем доставать из строки запроса  с помощью useParams

type UserItemPageParams = {
  id: string,
}

const UserItemPage: FC = () => {
  // Определяем тип, который должен быть внутри состояния (массив интерфейса пользователя)
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      // Непонятно что в ответе,поэтому как generic указываем, что ожидаем массив пользователей
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return <div>
    <button onClick={() => navigate("/users")}>Back</button>
    <h1>Page of user {user?.name}</h1>
    <div>
      {user?.email}
    </div>
    <div>
      {user?.address.city} {user?.address.street} {user?.address.zipcode}
    </div>
  </div>;
};

export default UserItemPage;
