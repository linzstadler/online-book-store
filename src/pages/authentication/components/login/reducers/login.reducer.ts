import {Action, createReducer, on} from '@ngrx/store';
import * as LoginActions from './../actions/login.actions';
import LoginState, {initializeState} from './../states/login.state';
import {UserModel} from "../../../models/user.model";


const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(LoginActions.BeginLoginAction, (state: LoginState) => {
    return {...state, isLoading: true};
  }),
  on(LoginActions.SuccessLoginAction, (state: LoginState, {payload}) => {
    console.log(payload)
    return {...state, UserData: payload, isLoading: false};
  }),
  on(LoginActions.FailedLoginAction, (state: LoginState, error: Error) => {
    return {...state, isLoading: false, error: error};
  }),
);

export function LoginReducer(
  state: LoginState | undefined,
  action: Action
): { isLoading: boolean; UserData: UserModel } {
  return reducer(state, action);
}
