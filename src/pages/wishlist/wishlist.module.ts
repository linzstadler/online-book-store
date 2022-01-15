import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WishlistComponent} from './wishlist.component';
import {WishlistRoutingModule} from "./wishlist-routing.module";


@NgModule({
    declarations: [
        WishlistComponent
    ],
    imports: [
        CommonModule,
        WishlistRoutingModule
    ]
})
export class WishlistModule {
}
