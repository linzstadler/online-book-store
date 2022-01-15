import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BucketComponent} from './bucket.component';
import {BucketRoutingModule} from "./bucket-routing.module";


@NgModule({
    declarations: [
        BucketComponent
    ],
    imports: [
        CommonModule,
        BucketRoutingModule
    ]
})
export class BucketModule {
}
