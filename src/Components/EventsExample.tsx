import React, { FC, useRef, useState } from "react";
// Типизация событий

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false); // true, если элемент занесли в квадрат
  const inputRef = useRef<HTMLInputElement>(null);

  // Колбэки, которые вешают на слушатели событий, принимают параметром event
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // явно указываем тип. Теперь в поле target только те поля, которые имеет input
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value); // значение управляемого инпута
    console.log(inputRef.current?.value); // значение НЕуправляемого инпута (current - наш инпут элемент)
     
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
      <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый" />
      <input ref={inputRef} type="text" placeholder="НЕуправляемый" />
      <button onClick={clickHandler}>Button</button>
      <div style={{display: 'flex', gap: 20, margin: '20px 0'}}>
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
            background: isDrag ? "blue" : "lightblue",
          }}
        ></div>
      </div>
    </div>
  );
};

export default EventsExample;
