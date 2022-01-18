
import {UserModel} from "../../../models/user.model";

export default interface LoginState {
  UserData: Array<UserModel>;
  isLoading: boolean;
}

export const initializeState = (): LoginState => {
  return {UserData: Array<UserModel>(), isLoading: false};
};
