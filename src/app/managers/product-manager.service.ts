import { ProductAccessService } from '../dbaccess/product-access.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';

/**
 * The ProductManagerService handles all CRUD Operations and Methods for Products.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-09 23:52:44 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-10 00:54:22
 */
@Injectable()
export class ProductManagerService {

    /**
     * The constructor of ProductManagerService.
     */
    constructor(private productAccessService: ProductAccessService) {
    }

    /**
     * Get all products.
     */
    public getProducts(): Observable<Product[]> {
        return this.productAccessService.getProducts();
    }

    /**
     * Get a specific product.
     *
     * @param id the product ID
     */
    public getProduct(id: string): Observable<Product> {
        return this.productAccessService.getProduct(id);
    }

    /**
     * Create a new Product.
     *
     * @param product the product
     */
    public async createProduct(product: Product): Promise<Product> {
        return await this.productAccessService.createProduct(product);
    }

    /**
     * Removes a specific Product by ID.
     *
     * @param id the product ID
     */
    public async removeProduct(id: string): Promise<void> {
        await this.productAccessService.removeProduct(id);
    }
}