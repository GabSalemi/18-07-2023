import { randomTodos } from "@/mocks/todoList";


export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": 
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case "REMOVE_TODO":
       let filteredState =  state.todos.filter(item => item.id !== action.payload)
      return {
        ...state,
        todos: filteredState,
      };
      case "COMPLETED_TODO":
        let filteredUncompleted =  state.todos.filter(item => item.id !== action.payload.id)
        return {
          ...state,
          todos: filteredUncompleted,
        };
      case "REMOVE_ALL":
        return {
          ...state,
          todos: [],
        };
      case "RANDOM_TODO":
        return {
          ...state,
          todos: [randomTodos],
        };
      default:
        console.log(state);
        return state;
    }
  };

  export const loginReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": 
        return {
          ...state,
          username: action.payload,
        };
      default:
        console.log(state);
        return state;
    }
  }
