import {Action, createReducer, on} from '@ngrx/store';
import * as BucketActions from '../actions/bucket.actions';
import BucketState, {initializeState} from '../states/bucket.state';
import {ProductModel} from "../../../shared/models/product.model";


const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(BucketActions.AddingBucketAction, (state: BucketState) => {
        return {...state};
    }),
    on(BucketActions.SuccessAddingBucketAction, (state: BucketState, {payload}) => {
        return {...state, BucketList: [...state.BucketList, payload]};
    })
);

export function BucketReducer(
    state: BucketState | undefined,
    action: Action
): { BucketList: (ProductModel | ProductModel[])[] } {
    return reducer(state, action);
}
