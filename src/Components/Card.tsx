import React, { FC } from "react";

// Описываем, что ожидаем на вход пропса
export enum CardVariant {
  outlined = 'iutlined',
  primary = 'primary',
}

// Задаем интерфейс, описывающий, какие пропсы будет ожидать компонент + работает автокомплит
// Если пропс необязателен, ставим ?
interface CardProps {
  width?: string,
  height?: string,
  children?: React.ReactChild | React.ReactNode
  variant: CardVariant, // ожидаем что-то из перечисления CardVariant
  onClick: () => void, // void - если функция ничего не возвращает, number, string... - если возвращает
}


// задаем тип FunctionComponent и как generic(обобщающий тип) передаем интерфейс CardProps
const Card: FC<CardProps> = ({width, height, children, variant, onClick}) => {

  return (
    <div onClick={onClick} style={{width, height, border: variant === CardVariant.outlined ? '1px solid grey' : 'none', background: variant === CardVariant.primary ? 'lightgrey' : ''}}>
      {children}
    </div>
  )}

export default Card;