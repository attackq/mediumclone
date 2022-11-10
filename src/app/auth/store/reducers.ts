import {AuthStateInterface} from '../types/authState.interface'
import {createReducer, on} from '@ngrx/store'
import {registerAction} from './actions/register.action'
import {Actions} from '@ngrx/store-devtools/src/reducer'

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,
  on(registerAction, (state: AuthStateInterface) => ({
    ...state,
    isSubmitting: true,
  }))
)

export function reducers(state: AuthStateInterface, action: Actions) {
  return authReducer(state, action)
}
