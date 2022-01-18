import {createAction, props} from '@ngrx/store';
import {ProductModel} from "../../../shared/models/product.model";


export enum ActionTypes {
    ADDING_BUCKET = '[Bucket] - Begin Adding Bucket',
    SUCCESS_ADDING_BUCKET = '[Bucket] - Success Adding Bucket',
    BEGIN_REMOVING_BUCKET = '[Bucket] - Begin Removing Bucket',
    SUCCESS_REMOVING_BUCKET = '[Bucket] - Success Removing Bucket',
}

export const AddingBucketAction = createAction(
    ActionTypes.ADDING_BUCKET,
    props<{ payload: ProductModel }>()
);
export const SuccessAddingBucketAction = createAction(
    ActionTypes.SUCCESS_ADDING_BUCKET,
    props<{ payload: ProductModel }>()
);

export const BeginRemovingBucketAction = createAction(
    ActionTypes.BEGIN_REMOVING_BUCKET,
    props<{ id: string }>()
);
export const SuccessRemovingBucketAction = createAction(
    ActionTypes.SUCCESS_REMOVING_BUCKET,
    props<{ payload: ProductModel }>()
);

