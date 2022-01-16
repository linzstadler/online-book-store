import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "./services/product.service";
import {catchError, Observable, throwError} from "rxjs";

import {TotalProductsModel} from "./models/total-products.model";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products!: Observable<TotalProductsModel>;
    public error: Error;

    constructor(
        private router: ActivatedRoute,
        private productService: ProductService
    ) {
    }

    ngOnInit(): void {
        this.router.queryParams.subscribe(res => {
            console.log(res) //will give query params as an object
            this.products = this.productService.getProducts(res['category']).pipe(catchError((err: Error) => {
                this.error = err;
                return throwError(err);
            }));
        })
    }

}
