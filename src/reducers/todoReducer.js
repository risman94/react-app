import { ADD_TODO } from "../actions/constants";

const addTodo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          createdAt: action.createdAt,
          name: action.name
        }
      ];
    default:
      return state;
  }
};

export default addTodo;
