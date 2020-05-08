import { IUserDisconnect, ILoadUsers } from "../actions/userAction"

type ActionType = IUserDisconnect | ILoadUsers

export interface IUser {
  name: string
  messColor: string
  id: string
}

export type UsersState = IUser[]

const users = (state = [], action: ActionType): UsersState => {
  switch(action.type) {
    case 'LOAD_USERES':
      return action.payload.users
    case 'USER_DISCONNECTED':
      return state.filter(user => user.id !== action.payload.id)
    default: return state
  }
}

export default users