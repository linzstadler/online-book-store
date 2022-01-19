import { Component, OnInit } from '@angular/core';
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
  totalPrice: number = 0;
  constructor(
      private storeBucketList$: Store<{ bucket: BucketState }>
  ) {
    this.bucketList$ = this.storeBucketList$.select('bucket');
  }

  ngOnInit(): void {
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
}
