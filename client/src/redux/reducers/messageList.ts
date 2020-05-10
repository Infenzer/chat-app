import { IAddMess } from "../actions/messAction"


export interface IMessage {
  text: string,
  id: number
  name: string
  time: Date
  color: string
}

type ActionType = IAddMess

const messageList = (state = [], action: ActionType): IMessage[] => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          ...action.payload
        }
      ]
    default: return state
  }
}

export default messageList