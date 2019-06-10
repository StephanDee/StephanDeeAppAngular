import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

/**
 * The ProductAccessService is the REST API connection to the StephanDeeCloud with all the CRUD Operations.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-09 23:52:36 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-10 00:50:15
 */
@Injectable()
export class ProductAccessService {
    private apiUrl = "http://localhost:3000";
    private routeProducts = "/products";

    /**
     * The constructor of ProductAccessService.
     *
     * @param http The http client.
     */
    constructor(private http: HttpClient) {
    }

    /**
     * Get all products.
     */
    public getProducts(): Observable<Product[]> {
        try {
            return this.http.get<Product[]>(`${this.apiUrl}${this.routeProducts}`);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Get a specific product.
     *
     * @param id the product ID
     */
    public getProduct(id: string): Observable<Product> {
        try {
            return this.http.get<Product>(`${this.apiUrl}${this.routeProducts}/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Create a new Product.
     *
     * @param product the product
     */
    public async createProduct(product: Product): Promise<Product> {
        try {
            let headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');

            return await this.http.post<Product>(
                `${this.apiUrl}${this.routeProducts}`,
                product,
                { headers: headers }
            ).toPromise();
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Removes a specific Product by ID
     *
     * @param id the product ID
     */
    public async removeProduct(id: string): Promise<void> {
        await this.http.delete<Product>(`${this.apiUrl}${this.routeProducts}`);
    }
}