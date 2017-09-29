import { ADD_TODO } from "./constants";

let todoId = 0;
export const addTodoAction = name => ({
  type: ADD_TODO,
  id: (todoId++).toString(),
  text: "this is text...",
  createdAt: new Date().toString(),
  name
});
