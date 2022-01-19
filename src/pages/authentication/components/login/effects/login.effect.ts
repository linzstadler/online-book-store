import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {catchError, Observable, of, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';
import * as LoginAction from './../actions/login.actions';
import {Router} from '@angular/router';
import {AuthService} from "../../../services/auth.service";
import {UserModel} from "../../../models/user.model";
import {TokenService} from "../../../../../shared/services/token/token.service";

@Injectable()
export class LoginEffect {
    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private action$: Actions, protected router: Router,) {
    }

    Login$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(LoginAction.BeginLoginAction),
            switchMap(
                (payload) => this.authService.login(payload.email, payload.password).pipe(
                    map((data: UserModel[]) => {
                        const result = {
                            id: data[0].id,
                            first_name: data[0].first_name,
                            last_name: data[0].last_name,
                            avatar: data[0].avatar,
                            email: data[0].email
                        }
                        this.tokenService.setToken(result);
                        this.router.navigateByUrl('/home');
                        return LoginAction.SuccessLoginAction({payload: result});
                    }),
                    catchError((error: Error) => {
                        return of(LoginAction.FailedLoginAction(error));
                    })
                )
            )
        )
    );

}
