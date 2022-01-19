import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuardLogin} from "../../shared/gaurds/auth.guard";

const routes: Routes = [
    {
        path: '', component: AuthenticationComponent, children: [
            {
                path: '',
                canActivate: [AuthGuardLogin],
                redirectTo: 'login'
            },
            {
                path: 'login',
                canActivate: [AuthGuardLogin],
                component: LoginComponent
            },
            {
                path: 'register',
                canActivate: [AuthGuardLogin],
                component: RegisterComponent
            },
            {path: '**', redirectTo: 'login'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
