import { ADD_WRITING_USER, DELETE_WRITING_USER } from "../types";

// Add WritingUser
export interface IAddWritingUser {
  type: typeof ADD_WRITING_USER
  payload: {
    id: string,
    name: string
  }
}

export const addWritingUser = (id: string, name: string): IAddWritingUser => ({
  type: ADD_WRITING_USER,
  payload: {
    id,
    name
  }
})

// Delete Writing User
export interface IDeleteWritingUser {
  type: typeof DELETE_WRITING_USER,
  payload: {
    id: string
  }
}

export const deleteWritingUser = (id: string): IDeleteWritingUser => ({
  type: DELETE_WRITING_USER,
  payload: {
    id
  }
})