import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as BucketAction from '../actions/bucket.actions';
import {Router} from '@angular/router';

@Injectable()
export class BucketEffect {
    constructor(
        private action$: Actions,
        protected router: Router
    ) {
    }

    Bucket$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(BucketAction.AddingBucketAction),
            map((payload) => BucketAction.SuccessAddingBucketAction({payload: payload.payload}))
        )
    );

}
