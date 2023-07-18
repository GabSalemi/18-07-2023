import { createContext } from "react";

export const MainContext = createContext();

export const initialTodoState = [{
  id: 0,
  todo: "Do something...",
  type: ""
}];

