import {ProductModel} from "../../../shared/models/product.model";

export default interface WishlistState {
  Wishlist: Array<ProductModel>;
}

export const initializeState = (): WishlistState => {
  return {Wishlist: Array<ProductModel>()};
};
