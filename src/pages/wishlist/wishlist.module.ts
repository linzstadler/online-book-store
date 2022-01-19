import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WishlistComponent} from './wishlist.component';
import {WishlistRoutingModule} from "./wishlist-routing.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
    declarations: [
        WishlistComponent
    ],
    imports: [
        CommonModule,
        WishlistRoutingModule,
        NzIconModule,
        NzGridModule,
        NzButtonModule
    ]
})
export class WishlistModule {
}
