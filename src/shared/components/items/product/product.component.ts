import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product.model";
import {ProductEnum} from "../../../enums/product-enum";
import {Store} from "@ngrx/store";
import BucketState from "../../../../pages/bucket/states/bucket.state";
import * as BucketActions from './../../../../pages/bucket/actions/bucket.actions'
import {Observable} from "rxjs";
import LoginState from "../../../../pages/authentication/components/login/states/login.state";
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Input() data: ProductModel;
    bucketList$: Observable<BucketState>;
    isAddedInBucket: boolean = false;
    getProductEnum() {
        return ProductEnum
    }

    constructor(
        private store$: Store<{ bucket: BucketState }>
    ) {
        this.bucketList$ = this.store$.select('bucket');
    }

    ngOnInit(): void {
        const userSubscription = this.store$.select('bucket').subscribe(data => {
            if(data.BucketList.filter(filterItem => filterItem.id === this.data.id).length > 0) {
                this.isAddedInBucket = true;
            }

        });
    }

    addProductToBucket(): void {
        this.store$.dispatch(BucketActions.AddingBucketAction({
            payload: this.data
        }));
    }

}
