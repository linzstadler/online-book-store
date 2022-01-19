import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "./services/product.service";

import {TotalProductsModel} from "./models/total-products.model";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        let max = document.documentElement.scrollHeight;
        if (pos === max) {
            this.pageSize += 30;
            this.getProducts();
        }
    }

    products: TotalProductsModel = {
        totalItems: 0,
        items: []
    };
    isLoading: boolean = false;
    private category: string;
    public error: Error;
    private pageSize = 0;

    constructor(
        private router: ActivatedRoute,
        private productService: ProductService
    ) {
    }

    ngOnInit(): void {
        this.router.queryParams.subscribe(res => {
            this.category = res['category']
            this.products.totalItems = 0;
            this.products.items = [];
            this.getProducts();
        })

    }

    private getProducts() {
        this.isLoading = true;
        this.productService.getProducts(this.category, this.pageSize).subscribe(data => {
            this.products.totalItems = data.totalItems;
            data.items.map(item => {
                this.products.items.push(item);
            });
            this.isLoading = false;
        })
    }

}
