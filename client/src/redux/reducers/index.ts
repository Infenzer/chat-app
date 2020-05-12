import { combineReducers } from "redux";
import alert from "./alert";
import messageList from "./messageList";
import users from "./users";
import writingUsers from "./writingUsers";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  messageList,
  alert,
  users,
  writingUsers
})

export default rootReducer