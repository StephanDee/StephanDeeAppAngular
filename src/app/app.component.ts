import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ProductManagerService } from './managers/product-manager.service';
import { Product } from './models/product';
import { Subscription } from 'rxjs';
import { FormControl, FormControlName, NgModel } from '@angular/forms';

/**
 * The AppComponent the root component of the app.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-09 23:53:07 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-10 00:55:52
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductManagerService]
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('name', { static: false }) name: NgModel;
  @ViewChild('description', { static: false }) description: NgModel;
  @ViewChild('price', { static: false }) price: NgModel;

  private getProductsSubscription: Subscription;
  public products: Product[] = [];

  /**
   * The constructor of AppComponent.
   *
   * @param productManagerService This service handles all operations and methods for products.
   */
  constructor(public productManagerService: ProductManagerService) {
  }

  /**
   * Initialize the AppComponent.
   */
  public ngOnInit(): void {
    this.getProductsSubscription = this.productManagerService.getProducts().subscribe((productData: Product[]) => {
      this.products = productData;
    });
  }

  /**
   * When the AppComponent is left.
   */
  public ngOnDestroy(): void {
    // unsubscribe Subscriptions
    this.getProductsSubscription.unsubscribe();
  }

  /**
   * Adds a new product.
   * 
   * @param name the name of the product
   * @param price the price of the product
   * @param description the description of the product, optional paramenter
   */
  public async addProduct(name: string, price: number, description?: string): Promise<void> {
    let product = new Product(
      name,
      price
    );

    // optional parameter
    if (description !== undefined) {
      product.description = description;
    }

    const newProduct: Product = await this.productManagerService.createProduct(product);
    this.products.push(newProduct);

    // resets the inputs
    this.name.reset('');
    this.description.reset('');
    this.price.reset('');
  }
}
