import { IAddWritingUser, IDeleteWritingUser } from "../actions/writingUsersAction"

type ActionType = IAddWritingUser | IDeleteWritingUser

type WritingUsersState = Array<{
  name: string,
  id: string
}>

const writingUsers = (state: WritingUsersState = [], action: ActionType): WritingUsersState => {
  switch (action.type) {
    case 'ADD_WRITING_USER':
      return [
        ...state,
        {
          ...action.payload
        }
      ]
    case 'DELETE_WRITING_USER':
      return state.filter(user => user.id !== action.payload.id)
    default: return state
  }
}

export default writingUsers