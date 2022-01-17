import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../../pages/home/models/product.model";
import {ProductEnum} from "../../../enums/product-enum";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Input() data: ProductModel;

    getProductEnum() {
        return ProductEnum
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
