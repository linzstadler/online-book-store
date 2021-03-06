import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TotalProductsModel} from "../models/total-products.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly endpoint = `${environment.baseUrl}/books/v1/volumes`;

    constructor(private http: HttpClient) {
    }

    getProducts(category: string, index: number): Observable<TotalProductsModel> {
        let params = new HttpParams();
        params = params.set('q', `subject: ${category}`);
        params = params.set('maxResults', 30);
        params = params.set('startIndex', index);
        return this.http.get<TotalProductsModel>(`${this.endpoint}`, {params});
    }
}
