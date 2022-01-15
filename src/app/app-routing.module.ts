import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./../layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
    },
    {
        path: '',
        loadChildren: () => import('./../layouts/home-layout/home-layout.module').then(m => m.HomeLayoutModule)
    },
    {path: '', redirectTo: 'pages', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
