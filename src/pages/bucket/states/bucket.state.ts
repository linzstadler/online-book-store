import {ProductModel} from "../../../shared/models/product.model";

export default interface BucketState {
  BucketList: Array<ProductModel>;
}

export const initializeState = (): BucketState => {
  return {BucketList: Array<ProductModel>()};
};
