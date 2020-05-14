import { combineReducers } from "redux";
import alert from "./alert";
import messageList from "./messageList";
import users from "./users";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  messageList,
  alert,
  users,
})

export default rootReducer