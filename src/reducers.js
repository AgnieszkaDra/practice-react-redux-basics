import { combineReducers } from 'redux'
import mainReducer from './redux/main/duck'

const rootReducer = combineReducers({
  main: mainReducer,
})

export default rootReducer