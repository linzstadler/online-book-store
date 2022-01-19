import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {SubSink} from "subsink";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";
import * as LoginAction from './actions/login.actions';

import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import LoginState from "./states/login.state";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    validateForm!: FormGroup;
    login$: Observable<LoginState>;
    private subs = new SubSink();
    public isLoading = false;
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private authService: AuthService,
        private message: NzMessageService,
        private store$: Store<{ user: LoginState }>
    ) {

    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required]],
        });
        const userSubscription = this.store$.select('user').subscribe(data => {
            this.isLoading = data.isLoading
        });
        this.subs.add(userSubscription);

    }

    submitForm(): void {
        if (this.validateForm.valid) {
            this.store$.dispatch(LoginAction.BeginLoginAction({
                email: this.validateForm.get('email')?.value, password: this.validateForm.get('password')?.value
            }));

        } else {
            Object.values(this.validateForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe()
    }
}
