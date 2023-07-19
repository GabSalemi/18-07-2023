import { randomTodos } from "@/mocks/todoList";


export const todoReducer = (state, action) => {
    switch (action.type) {
      case "FIRST_TODO": 
        return [action.payload]
      case "ADD_TODO": 
        return [...state, action.payload]
      case "REMOVE_TODO":
       let filteredState =  state.filter(item => item.id !== action.payload)
      return filteredState
      case "COMPLETED_TODO":
        let filteredUncompleted =  state.filter(item => item.id !== action.payload.id)
        return filteredUncompleted
      case "REMOVE_ALL":
        return []
      case "RANDOM_TODO":
        return randomTodos
      default:
        console.log(state);
        return state;
    }
  };

  export const loginReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": 
        return state
      default:
        console.log(state);
        return state;
    }
  }
