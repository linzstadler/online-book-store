
import {UserModel} from "../../../models/user.model";

export default interface LoginState {
  UserData: UserModel;
  isLoading: boolean;
  error: Error | null
}

export const initializeState = (): LoginState => {
  return {UserData: {
      id: null,
      first_name: null,
      last_name: null,
      avatar: null,
      email: null
    }, isLoading: false, error: null};
};
