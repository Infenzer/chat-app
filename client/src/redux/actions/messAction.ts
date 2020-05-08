import { ADD_MESSAGE } from "../types";

// send mess
export interface IAddMess {
  type: typeof ADD_MESSAGE
  id: number
  payload: {
    text: string
    name: string
    time: Date
    color: string
  }
}

let id = 0

export const addMess = (text: string, name: string, color: string): IAddMess => ({
  type: ADD_MESSAGE,
  id: id++,
  payload: {
    text,
    name,
    time: new Date(),
    color: color
  }
})

