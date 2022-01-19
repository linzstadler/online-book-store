import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import BucketState from "../../../pages/bucket/states/bucket.state";
import {Observable} from "rxjs";
import WishlistState from "../../../pages/wishlist/states/wishlist.state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;
  countBucket$: Observable<BucketState>;
  countWishlist$: Observable<WishlistState>;
  constructor(
      private storeBucket$: Store<{ bucket: BucketState }>,
      private storeWishlist$: Store<{ wishlist: WishlistState }>
  ) {
    this.countBucket$ = this.storeBucket$.select('bucket');
    this.countWishlist$ = this.storeWishlist$.select('wishlist');
  }

  ngOnInit(): void {

  }



  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

}
