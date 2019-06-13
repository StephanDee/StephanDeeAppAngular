import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ProductManagerService } from './managers/product-manager.service';
import { Product } from './models/product';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * The AppComponent the root component of the app.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-11 13:52:51 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-11 14:18:52
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductManagerService]
})
export class AppComponent implements OnInit, OnDestroy {

  public productForm: FormGroup;
  private getProductsSubscription: Subscription;
  public products: Product[] = [];

  /**
   * The constructor of AppComponent.
   *
   * @param productManagerService This service handles all operations and methods for products.
   */
  constructor(
    public productManagerService: ProductManagerService,
    public formBuilder: FormBuilder
  ) {
  }

  /**
   * Initialize the AppComponent.
   */
  public ngOnInit(): void {
    this.initForm();
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

  public initForm() {
    this.productForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.maxLength(30)]],
      'description': ['', Validators.maxLength(255)],
      'price': ['', Validators.required]
    });
  }

  /**
   * Adds a new product.
   * 
   * @param name the name of the product
   * @param price the price of the product
   * @param description the description of the product, optional paramenter
   */
  public async addProduct(name: string, price: number, description?: string): Promise<void> {
    if (name && name !== '' && name !== null && price && price !== null) {
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
      this.productForm.get('name').reset();
      this.productForm.get('description').reset();
      this.productForm.get('price').reset();
    } else {
      alert('Bitte füllen Sie alle mit dem * gekennzeichneten Felder aus.');
    }
  }

  /**
   * Delete Product.
   *
   * @param id the product ID
   */
  public async deleteProduct(id: string): Promise<void> {
    await this.productManagerService.removeProduct(id);

    // remove product from List
    const index = this.products.findIndex((product) => product._id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
