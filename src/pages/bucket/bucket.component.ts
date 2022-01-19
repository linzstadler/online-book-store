import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as BucketActions from "../bucket/actions/bucket.actions";
import BucketState from "./states/bucket.state";

@Component({
    selector: 'app-bucket',
    templateUrl: './bucket.component.html',
    styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {
    bucketList$: Observable<BucketState>;
    paymentHandler: any = null;
    totalPrice: number = 0;
    paymentToken: any = null;
    constructor(
        private storeBucketList$: Store<{ bucket: BucketState }>
    ) {
        this.bucketList$ = this.storeBucketList$.select('bucket');
    }

    ngOnInit(): void {
        this.invokeStripe();
        this.bucketList$.subscribe(data => {
            this.totalPrice = 0;

            data.BucketList.map(item => {
                console.log(parseFloat(item.saleInfo.retailPrice.amount))
                this.totalPrice += parseFloat(item.saleInfo.retailPrice.amount);
            })
        })
    }

    remove(id: string): void {
        this.storeBucketList$.dispatch(BucketActions.RemovingBucketAction({
            id: id
        }));
    }

    initializePayment() {
        const paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51KJbO2D0MbIE876iztr6WKicTYrtr8qm0XC15vU9y1PFKoLDDy0uH8tJtsELJvuigbabXPnVkw9HSB5ZKP3MwDea00NJwyNJuA',
            locale: 'auto',
            token: function (stripeToken: any) {
                console.log({stripeToken})
                alert('Stripe token generated!');
            }
        });

        paymentHandler.open({
            name: 'Online book store',
            description: 'Buying bucket list books',
            amount: this.totalPrice * 100
        });
    }

    invokeStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const script = window.document.createElement("script");
            script.id = "stripe-script";
            script.type = "text/javascript";
            script.src = "https://checkout.stripe.com/checkout.js";
            script.onload = () => {
                this.paymentHandler = (<any>window).StripeCheckout.configure({
                    key: 'pk_test_51KJbO2D0MbIE876iztr6WKicTYrtr8qm0XC15vU9y1PFKoLDDy0uH8tJtsELJvuigbabXPnVkw9HSB5ZKP3MwDea00NJwyNJuA',
                    locale: 'auto',
                    token: function (stripeToken: any) {
                        this.paymentToken = stripeToken;
                    }
                });
            }
            window.document.body.appendChild(script);
        }
    }

}
