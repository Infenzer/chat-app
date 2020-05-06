import { AlertType, IHideAlert, IShowAlert } from "../actions/visibleAlert"


export interface AlertState {
  visible: boolean
  type: AlertType
  text: string
}

type ActionType = IHideAlert | IShowAlert

const initialState: AlertState = {
  type: 'SUCCESS',
  text: '',
  visible: false
}

const alert = (state = initialState, action: ActionType): AlertState => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        type: action.payload.type,
        text: action.payload.text,
        visible: true
      }
    case 'HIDE_ALERT':
      return {
        ...state,
        visible: false
      }
    default: return state
  } 
}

export default alert