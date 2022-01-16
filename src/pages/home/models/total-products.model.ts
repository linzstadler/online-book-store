import {ProductModel} from "./product.model";

export interface TotalProductsModel {
    totalItems: number;
    items: [
        ProductModel
    ]
}
