export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": 
        return {id: 2,
          todo: action.payload.todo,
          type: action.payload.type
        };
      case "DELETE_TODO":
        return 
      case "DELETE_ALL_TODO":
        return 
      default:
        console.log(state);
        return state;
    }
  };