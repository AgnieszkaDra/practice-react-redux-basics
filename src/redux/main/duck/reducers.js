import types from "./types";

const INITIAL_STATE = {
    message: 'Działa!',
    time: new Date(),
  };
  
  const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CURRENT_TIME:
        return {
            ...state,
            time: new Date(),
        };
        default:
        return state;
    }
  };
  
  export default mainReducer;