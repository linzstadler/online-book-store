import {Action, createReducer, on} from '@ngrx/store';
import * as BucketActions from '../actions/bucket.actions';
import BucketState, {initializeState} from '../states/bucket.state';
import {ProductModel} from "../../../shared/models/product.model";


const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(BucketActions.AddingBucketAction, (state: BucketState, {payload}) => {
        return {...state, BucketList: [...state.BucketList, payload]};
    }),
    on(BucketActions.RemovingBucketAction, (state: BucketState, {id}) => {
        return {
            BucketList: [
                ...state.BucketList.filter(item => item.id !== id)
            ]
        }

    })
);

export function BucketReducer(
    state: BucketState | undefined,
    action: Action
): { BucketList: (ProductModel | ProductModel[])[] } {
    return reducer(state, action);
}
