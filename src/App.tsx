// npx create-react-app . --template typescript

// npm i react-router-dom @types/react-router/dom

// Статическая типизация дает много преимуществ и предотвращает ошибки. Сможем изначально определить типы данных, с которыми будем работать; пользоваться автокомплитом; знать какие поля есть у объекта; отпралвять запрос на сервер и явно указывать что ожидаем в ответе; типизировать пропсы

import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./Components/Card";
import UserList from "./Components/UserList";

import EventsExample from "./Components/EventsExample";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UsersPage from "./Components/UsersPage";
import TodosPage from "./Components/TodosPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to={'/users'}>Пользователи</Link>
          <Link to={'/todos'}>Список дел</Link>
        </div>
        <Routes>
          <Route path={"/users"} element={<UsersPage/>}/>
          <Route path={"/todos"} element={<TodosPage/>}/>
        </Routes>

        <EventsExample />
        <Card
          onClick={() => console.log("click")}
          variant={CardVariant.outlined}
          width="200px"
          height="200px"
        >
          <button>Button</button>
        </Card>
      </div>
    </BrowserRouter>
  );
};

export default App;
