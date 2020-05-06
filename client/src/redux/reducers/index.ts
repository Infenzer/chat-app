import { combineReducers } from "redux";
import alert from "./alert";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  alert
})

export default rootReducer