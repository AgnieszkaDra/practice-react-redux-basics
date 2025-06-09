import types from "./types";

const INITIAL_STATE = {
    message: 'Działa!',
    time: new Date(),
    users: []
  };

const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.CURRENT_TIME:
        return {
          ...state,
          time: new Date(),
        };
  
      case types.ADD_USER:
        return {
          ...state,
          users: [...state.users, action.user], 
          id: new Date(),
        };

        case types.REMOVE_USER:
  return {
    ...state,
    users: state.users.filter(user => user.id !== action.id),
    time: new Date(),
  };
  
      default:
        return state;
    }
  };
  
  export default mainReducer;