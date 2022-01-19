import {createAction, props} from '@ngrx/store';
import {ProductModel} from "../../../shared/models/product.model";


export enum ActionTypes {
    ADDING_WISHLIST = '[Wishlist] - Adding Wishlist',
    REMOVING_WISHLIST = '[Wishlist] - Removing Wishlist',
}

export const AddingWishlistAction = createAction(
    ActionTypes.ADDING_WISHLIST,
    props<{ payload: ProductModel }>()
);

export const RemovingWishlistAction = createAction(
    ActionTypes.REMOVING_WISHLIST,
    props<{ id: string }>()
);

