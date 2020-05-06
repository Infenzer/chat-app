import { HIDE_ALERT, SHOW_ALERT } from "../types"

export type AlertType = 'ERROR' | 'WARNING' | 'SUCCESS' 

// Hide
export interface IHideAlert {
  type: typeof HIDE_ALERT
} 

export const hideAlert = (): IHideAlert => ({
  type: HIDE_ALERT
})

// Show
export interface IShowAlert {
  type: typeof SHOW_ALERT
  payload: {
    text: string
    type: AlertType
  }
}

export const showAlert = (type: AlertType,text: string): IShowAlert => ({
  type: SHOW_ALERT,
  payload: {
    type,
    text
  }
})