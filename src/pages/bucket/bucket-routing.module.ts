import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BucketComponent} from "./bucket.component";

const routes: Routes = [{ path: '', component: BucketComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BucketRoutingModule {
}
