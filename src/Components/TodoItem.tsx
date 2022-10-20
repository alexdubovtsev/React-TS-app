import React, { FC, useState } from "react";
import { ITodo } from "../Types/Types";

interface TodoProps {
  todo: ITodo,
}

const TodoItem: FC<TodoProps> = ({todo}) => {
  return (
    <div>
      <input type='checkbox' checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  )}

export default TodoItem;