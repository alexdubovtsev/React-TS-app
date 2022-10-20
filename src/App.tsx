// npx create-react-app . --template typescript

// Статическая типизация дает много преимуществ и предотвращает ошибки. Сможем изначально определить типы данных, с которыми будем работать; пользоваться автокомплитом; знать какие поля есть у объекта; отпралвять запрос на сервер и явно указывать что ожидаем в ответе; типизировать пропсы

import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./Components/Card";
import UserList from "./Components/UserList";
import { ITodo, IUser } from "./Types/Types";
import axios from "axios";
import List from "./Components/List";
import UserItem from "./Components/UserItem";
import TodoItem from "./Components/TodoItem";
import EventsExample from "./Components/EventsExample";

const App = () => {
  // Определяем тип, который должен быть внутри состояния (массив интерфейса пользователя)
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
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

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      // Непонятно что в ответе,поэтому как generic указываем, что ожидаем массив пользователей
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <EventsExample/>
      <Card
        onClick={() => console.log("click")}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <br />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default App;
