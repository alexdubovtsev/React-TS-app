import React, { useState, useEffect, FC } from "react";
import { ITodo } from "../Types/Types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
  // Определяем тип, который должен быть внутри состояния (массив интерфейса пользователя)
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

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
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
