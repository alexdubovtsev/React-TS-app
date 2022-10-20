import React, { FC, useState } from "react";
// Типизация событий

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false); // true, если элемент занесли в квадрат

  // Колбэки, которые вешают на слушатели событий, принимают параметром event
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // явно указываем тип. Теперь в поле target только те поля, которые имеет input
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={clickHandler}>Button</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "lightblue" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler} // вышли за пределы
        onDragOver={dragWithPreventHandler} // внутри
        style={{
          width: 200,
          height: 200,
          marginTop: 20,
          background: isDrag ? "blue" : "lightblue",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
