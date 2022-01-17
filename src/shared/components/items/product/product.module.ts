import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzIconModule} from "ng-zorro-antd/icon";



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
        NzIconModule
    ]
})
export class ProductModule { }
