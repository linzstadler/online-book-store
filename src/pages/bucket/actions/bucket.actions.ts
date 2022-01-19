import {createAction, props} from '@ngrx/store';
import {ProductModel} from "../../../shared/models/product.model";


export enum ActionTypes {
    ADDING_BUCKET = '[Bucket] - Adding Bucket',
    REMOVING_BUCKET = '[Bucket] - Removing Bucket',
}

export const AddingBucketAction = createAction(
    ActionTypes.ADDING_BUCKET,
    props<{ payload: ProductModel }>()
);

export const RemovingBucketAction = createAction(
    ActionTypes.REMOVING_BUCKET,
    props<{ id: string }>()
);

