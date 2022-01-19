import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BucketComponent} from './bucket.component';
import {BucketRoutingModule} from "./bucket-routing.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
    declarations: [
        BucketComponent
    ],
    imports: [
        CommonModule,
        BucketRoutingModule,
        NzIconModule,
        NzGridModule,
        NzButtonModule
    ]
})
export class BucketModule {
}
