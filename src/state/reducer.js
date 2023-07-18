

export const todoReducer = (state, action) => {

    
    switch (action.type) {
      case "FIRST_TODO": 
        return [action.payload]
      case "ADD_TODO": 
        return [...state, action.payload]
      case "REMOVE_TODO":
         
       let filteredState =  state.filter(item=> item.todo !== action.payload)
        return filteredState
      default:
        console.log(state);
        return state;
    }
  };