import { combineReducers } from "redux";
import alert from "./alert";
import messageList from "./messageList";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  messageList,
  alert
})

export default rootReducer