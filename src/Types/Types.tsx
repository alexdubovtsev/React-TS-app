// Глобальные типы, которые могут использоваться в разных частях приложения

export interface IAddress {
  street: string,
  city: string,
  zipcode: string,
}

export interface IUser { // I - интерфейс
  id: number,
  name: string,
  email: string,
  address: IAddress,
}

export interface ITodo {
  id: number,
  title: string,
  completed: boolean,
}