import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import BucketState from "../../../pages/bucket/states/bucket.state";
import {Observable} from "rxjs";
import WishlistState from "../../../pages/wishlist/states/wishlist.state";
import {TokenService} from "../../services/token/token.service";
import LoginState from "../../../pages/authentication/components/login/states/login.state";
import * as LoginAction from "../../../pages/authentication/components/login/actions/login.actions";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    visible: boolean = false;
    countBucket$: Observable<BucketState>;
    countWishlist$: Observable<WishlistState>;
    user$: Observable<LoginState>;

    constructor(
        private tokenService: TokenService,
        private storeBucket$: Store<{ bucket: BucketState }>,
        private storeWishlist$: Store<{ wishlist: WishlistState }>,
        private storeUser$: Store<{ user: LoginState }>
    ) {

        this.storeUser$.dispatch(LoginAction.SuccessLoginAction({
            payload: this.tokenService.getToken()
        }));

        this.countBucket$ = this.storeBucket$.select('bucket');
        this.countWishlist$ = this.storeWishlist$.select('wishlist');
        this.user$ = this.storeUser$.select('user');


    }

    ngOnInit(): void {

    }

    clickMe(): void {
        this.visible = false;
    }

    change(value: boolean): void {
        console.log(value);
    }

    logout() {
        this.tokenService.removeToken();
    }

}
