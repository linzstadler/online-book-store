import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import WishlistState from "./states/wishlist.state";
import {Store} from "@ngrx/store";
import * as WishlistActions from "./actions/wishlist.actions";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist$: Observable<WishlistState>;
  constructor(
      private storeWishlist$: Store<{ wishlist: WishlistState }>
  ) {
    this.wishlist$ = this.storeWishlist$.select('wishlist');
  }

  ngOnInit(): void {
  }

  remove(id: string): void {
    this.storeWishlist$.dispatch(WishlistActions.RemovingWishlistAction({
      id: id
    }));
  }
}
