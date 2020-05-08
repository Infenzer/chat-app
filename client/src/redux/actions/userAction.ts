import { LOAD_USERS, USER_DISCONNECTED } from "../types";
import { IUser } from "../reducers/users";

// User connected
export interface ILoadUsers {
  type: typeof LOAD_USERS
  payload: {
    users: IUser[]
  }
}

export const loadUsers = (users: IUser[]): ILoadUsers => ({
  type: LOAD_USERS,
  payload: {
    users
  }
}) 

// User disconnected
export interface IUserDisconnect {
  type: typeof USER_DISCONNECTED
  payload: {
    id: string
  }
}

export const userDisconnect = (id: string): IUserDisconnect => ({
  type: USER_DISCONNECTED,
  payload: {
    id
  }
})
