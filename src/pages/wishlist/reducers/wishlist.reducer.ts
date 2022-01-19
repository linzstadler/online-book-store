import {Action, createReducer, on} from '@ngrx/store';
import * as BucketActions from '../actions/wishlist.actions';
import WishlistState, {initializeState} from '../states/wishlist.state';
import {ProductModel} from "../../../shared/models/product.model";


const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(BucketActions.AddingWishlistAction, (state: WishlistState, {payload}) => {
        return {...state, Wishlist: [...state.Wishlist, payload]};
    }),
    on(BucketActions.RemovingWishlistAction, (state: WishlistState, {id}) => {
        return {
            Wishlist: [
                ...state.Wishlist.filter(item => item.id !== id)
            ]
        }

    })
);

export function WishlistReducer(
    state: WishlistState | undefined,
    action: Action
): { Wishlist: (ProductModel | ProductModel[])[] } {
    return reducer(state, action);
}
