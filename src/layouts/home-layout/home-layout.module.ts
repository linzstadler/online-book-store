import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeLayoutComponent} from './home-layout.component';
import {HomeLayoutRoutingModule} from "./home-layout-routing.module";
import {HeaderModule} from "../../shared/components/header/header.module";
import {SidebarModule} from "../../shared/components/sidebar/sidebar.module";
import {NzGridModule} from "ng-zorro-antd/grid";


@NgModule({
    declarations: [
        HomeLayoutComponent
    ],
    imports: [
        CommonModule,
        HomeLayoutRoutingModule,
        HeaderModule,
        SidebarModule,
        NzGridModule
    ]
})
export class HomeLayoutModule {
}
