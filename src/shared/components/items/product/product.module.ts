import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzIconModule} from "ng-zorro-antd/icon";
import {StoreModule} from "@ngrx/store";
import {BucketReducer} from "../../../../pages/bucket/reducers/bucket.reducer";
import {WishlistReducer} from "../../../../pages/wishlist/reducers/wishlist.reducer";


@NgModule({
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        NzGridModule,
        NzButtonModule,
        NzPopoverModule,
        NzIconModule,
        StoreModule.forFeature('bucket', BucketReducer),
        StoreModule.forFeature('wishlist', WishlistReducer)
    ]
})
export class ProductModule { }
