import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {catchError, Observable, of, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';
import * as LoginAction from './../actions/login.actions';
import {Router} from '@angular/router';
import {AuthService} from "../../../services/auth.service";
import {UserModel} from "../../../models/user.model";

@Injectable()
export class LoginEffect {
  constructor(private authService: AuthService,
              private action$: Actions, protected router: Router,) {
  }

  Login$: Observable<Action> = createEffect(() =>
      this.action$.pipe(
          ofType(LoginAction.BeginLoginAction),
          switchMap(
              (payload) => this.authService.login(payload.email, payload.password).pipe(
                  map((data: UserModel[]) => {
                      return LoginAction.SuccessLoginAction({payload: data});
                  }),
                  catchError((error: Error) => {
                      return of(LoginAction.FailedLoginAction(error));
                  })
              )
          )

      )
    // this.action$.pipe(
    //   ofType(LoginAction.StoreUserData).pipe(map(item => {
    //       console.log(item)
    //   }))
    // )
  );

}
