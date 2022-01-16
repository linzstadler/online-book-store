import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingContainerComponent } from './loading-container.component';
import {NzIconModule} from "ng-zorro-antd/icon";



@NgModule({
  declarations: [
    LoadingContainerComponent
  ],
  exports: [
    LoadingContainerComponent
  ],
  imports: [
    CommonModule,
    NzIconModule
  ]
})
export class LoadingContainerModule { }
