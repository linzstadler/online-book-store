import {createAction, props} from '@ngrx/store';
import {UserModel} from "../../../models/user.model";


export enum ActionTypes {
    BEGIN_LOGIN = '[User] - Begin Login',
    SUCCESS_LOGIN = '[User] - Success Login',
    FAILED_LOGIN = '[User] - Failed Login',
}

export const BeginLoginAction = createAction(
    ActionTypes.BEGIN_LOGIN,
    props<{ email: string, password: string }>()
);
export const SuccessLoginAction = createAction(
    ActionTypes.SUCCESS_LOGIN,
    props<{ payload: UserModel[] }>()
);
export const FailedLoginAction = createAction(
    ActionTypes.FAILED_LOGIN,
    props<Error>()
);
