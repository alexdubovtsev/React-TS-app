// Список для разных типов (пользователей, постов и тд)

import React, { FC, useState } from "react";

interface ListProps<T> { // <T> - любой тип
  // Список элементов (любого типа)
  items: T[],
  // Компонент, который нужно отрисовать
  renderItem: (item: T) => React.ReactNode,
  children?: React.ReactChild | React.ReactNode,
}


export default function List<T>(props: ListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  )
};