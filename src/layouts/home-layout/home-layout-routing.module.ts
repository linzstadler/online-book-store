import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeLayoutComponent} from "./home-layout.component";

const routes: Routes = [
    {
        path: '', component: HomeLayoutComponent, children: [
            {
                path: '',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadChildren: () => import('./../../pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'bucket',
                loadChildren: () => import('./../../pages/bucket/bucket.module').then(m => m.BucketModule)
            },
            {
                path: 'wishlist',
                loadChildren: () => import('./../../pages/wishlist/wishlist.module').then(m => m.WishlistModule)
            },
            {path: '**', redirectTo: 'home'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeLayoutRoutingModule {
}
