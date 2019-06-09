import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

/**
 * The ProductAccessService is the REST API connection to the StephanDeeCloud with all the CRUD Operations.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-09 23:52:36 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-10 00:50:15
 */
export class ProductAccessService {
    public apiUrl = "http://localhost:3000";
    public routeProducts = "/products";

    /**
     * The constructor of ProductAccessService.
     *
     * @param http The http client.
     */
    constructor(public http: HttpClient) {
    }

    /**
     * Get all Products.
     */
    public getProducts(): Observable<Product> {
        let products: Observable<Object> = undefined;
        try {
            products = this.http.get(`${this.apiUrl}${this.routeProducts}`);
        } catch (error) {
            console.log(error);
        }

        return;
    }

    /**
     * Create a new Product.
     *
     * @param product the product
     */
    public createProduct(product: Product): void {
        try {
            this.http.post(`${this.apiUrl}${this.routeProducts}`, product);
        } catch (error) {
            console.log(error);
        }
    }
}