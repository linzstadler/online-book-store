import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {AuthLayoutModule} from "../../layouts/auth-layout/auth-layout.module";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NzMessageModule} from 'ng-zorro-antd/message';
import {StoreModule} from "@ngrx/store";
import {LoginReducer} from "./components/login/reducers/login.reducer";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffect} from "./components/login/effects/login.effect";
@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        AuthLayoutModule,
        NzFormModule,
        NzInputModule,
        NzCheckboxModule,
        NzButtonModule,
        FormsModule,
        ReactiveFormsModule,
        NzMessageModule,
        StoreModule.forFeature('user', LoginReducer),
        EffectsModule.forFeature([LoginEffect]),
    ],
    providers: [LoginEffect]
})
export class AuthenticationModule {
}
