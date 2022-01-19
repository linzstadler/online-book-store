import {ProductModel} from "../../../shared/models/product.model";

export interface TotalProductsModel {
    totalItems: number;
    items: ProductModel[]
}
