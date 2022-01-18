import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {ProductModule} from "../../shared/components/items/product/product.module";
import {NzListModule} from "ng-zorro-antd/list";
import {NzGridModule} from "ng-zorro-antd/grid";
import {LoadingContainerModule} from "../../shared/components/loading-container/loading-container.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ProductModule,
        NzListModule,
        NzGridModule,
        LoadingContainerModule,
    ]
})
export class HomeModule {
}
