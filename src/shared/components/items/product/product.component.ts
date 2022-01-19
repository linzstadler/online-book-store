import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../../models/product.model";
import {ProductEnum} from "../../../enums/product-enum";
import {Store} from "@ngrx/store";
import BucketState from "../../../../pages/bucket/states/bucket.state";
import * as BucketActions from './../../../../pages/bucket/actions/bucket.actions'
import * as WishlistActions from './../../../../pages/wishlist/actions/wishlist.actions'
import {Observable} from "rxjs";
import {SubSink} from "subsink";
import WishlistState from "../../../../pages/wishlist/states/wishlist.state";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
    private subs = new SubSink();
    @Input() data: ProductModel;
    bucketList$: Observable<BucketState>;
    wishlist$: Observable<WishlistState>;
    isAddedInBucket: boolean = false;
    isAddedInWishlist: boolean = false;

    getProductEnum() {
        return ProductEnum
    }

    constructor(
        private storeBucket$: Store<{ bucket: BucketState }>,
        private storeWishlist$: Store<{ wishlist: WishlistState }>
    ) {
        this.bucketList$ = this.storeBucket$.select('bucket');
        this.wishlist$ = this.storeWishlist$.select('wishlist');
    }

    ngOnInit(): void {
        const bucketSubscription = this.storeBucket$.select('bucket').subscribe(data => {
            if (data.BucketList.filter(filterItem => filterItem.id === this.data.id).length > 0) {
                this.isAddedInBucket = true;
            } else {
                this.isAddedInBucket = false;
            }

        });
        this.subs.add(bucketSubscription)

        const wishlistSubscription = this.storeWishlist$.select('wishlist').subscribe(data => {
            if (data.Wishlist.filter(filterItem => filterItem.id === this.data.id).length > 0) {
                this.isAddedInWishlist = true;
            } else {
                this.isAddedInWishlist = false;
            }

        });
        this.subs.add(wishlistSubscription)
    }

    addProductToBucket(): void {
        this.storeBucket$.dispatch(BucketActions.AddingBucketAction({
            payload: this.data
        }));
    }
    removeProductFromBucket(): void {
        this.storeBucket$.dispatch(BucketActions.RemovingBucketAction({
            id: this.data.id
        }));
    }

    addProductToWishlist(): void {
        this.storeWishlist$.dispatch(WishlistActions.AddingWishlistAction({
            payload: this.data
        }));
    }
    removeProductFromWishlist(): void {
        this.storeWishlist$.dispatch(WishlistActions.RemovingWishlistAction({
            id: this.data.id
        }));
    }

    ngOnDestroy() {
        this.subs.unsubscribe()
    }

}
