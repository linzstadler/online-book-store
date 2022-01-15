import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout.component";


const routes: Routes = [
    {
        path: '', component: AuthLayoutComponent, children: [
            {
                path: '',
                loadChildren: () => import('./../../pages/authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthLayoutRoutingModule {
}
