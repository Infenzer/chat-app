import { IAddMess } from "../actions/messAction"


export interface IMessage {
  text: string,
  id: number
  name: string
  time: Date
  color: string
}

type ActionType = IAddMess

const messLimit = 200
const messageList = (state = [], action: ActionType): IMessage[] => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      let newState = [
        ...state,
        {
          id: action.id,
          ...action.payload
        }
      ]

      if (state.length >= messLimit) {
        newState.shift()
      }

      return newState
    default: return state
  }
}

export default messageList