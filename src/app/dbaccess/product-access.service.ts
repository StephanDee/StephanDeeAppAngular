import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { BaseStephanDeeCloudAccessService } from './base-stephandeecloud-access.service';

/**
 * The ProductAccessService is the REST API connection to the StephanDeeCloud with all the CRUD Operations.
 *
 * @Author: Stephan Dünkel
 * @Date: 2019-06-11 13:53:35
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-19 23:46:05
 */
@Injectable()
export class ProductAccessService extends BaseStephanDeeCloudAccessService {
  private routeProducts = '/products';

  /**
   * The constructor of ProductAccessService.
   *
   * @param http The http client.
   */
  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Get all products.
   */
  public getProducts(token: string): Observable<Product[]> {
    try {
      return this.http.get<Product[]>(`${this.apiUrl}${this.routeProducts}`, {
        headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Accept', 'application/json')
        .append('auth-token', token)});
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
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      return await this.http.post<Product>(
        `${this.apiUrl}${this.routeProducts}`,
        product,
        { headers }
      ).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Update or create a product.
   *
   * @param product The product
   */
  public async updateProduct(product: Product): Promise<Product> {
    try {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      return await this.http.put<Product>(
        `${this.apiUrl}${this.routeProducts}/${product._id}`,
        product,
        { headers }
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
    try {
      await this.http.delete<Product>(`${this.apiUrl}${this.routeProducts}/${id}`).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
