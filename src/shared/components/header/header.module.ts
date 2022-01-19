import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {StoreModule} from "@ngrx/store";
import {BucketReducer} from "../../../pages/bucket/reducers/bucket.reducer";
import {RouterModule} from "@angular/router";
import {LoginReducer} from "../../../pages/authentication/components/login/reducers/login.reducer";
import {WishlistReducer} from "../../../pages/wishlist/reducers/wishlist.reducer";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NzIconModule,
        NzDropDownModule,
        NzPopoverModule,
        NzBadgeModule,
        StoreModule.forFeature('bucket', BucketReducer),
        StoreModule.forFeature('wishlist', WishlistReducer),
        StoreModule.forFeature('user', LoginReducer),
    ]
})
export class HeaderModule { }
