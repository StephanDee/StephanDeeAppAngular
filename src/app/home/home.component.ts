import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductManagerService } from '../managers/product-manager.service';
import { Product } from '../models/product';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';

/**
 * The AppComponent the root component of the app.
 *
 * @Author: Stephan Dünkel
 * @Date: 2019-06-11 13:52:51
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-18 18:55:04
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductManagerService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public productForm: FormGroup;
  private getProductsSubscription: Subscription;
  public products: Product[] = [];

  /**
   * The constructor of AppComponent.
   *
   * @param productService This service handles all operations and methods for products
   * @param formBuilder This is used to create formGroup with validations
   * @param dialog This is used to create a dialog
   */
  constructor(
    public productService: ProductManagerService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
  }

  /**
   * Initialize the AppComponent.
   */
  public ngOnInit(): void {
    this.initForm();
    this.getProductsSubscription = this.productService.getProducts().subscribe((productData: Product[]) => {
      this.products = productData;
    });
  }

  /**
   * When the AppComponent is left.
   * Unsubscribes all Subscriptions.
   */
  public ngOnDestroy(): void {
    // unsubscribe Subscriptions
    this.getProductsSubscription.unsubscribe();
  }

  /**
   * Initialize the form.
   */
  public initForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      description: ['', Validators.maxLength(255)],
      price: ['', Validators.required]
    });
  }

  /**
   * Opens the product dialog.
   *
   * @param id the _id of the product
   */
  public openProductDialog(id: string): void {
    const dialogRef: MatDialogRef<ProductDialogComponent> = this.dialog.open(ProductDialogComponent, {
      width: '532px',
      data: {
        productId: id
      },
      autoFocus: false
    });
    dialogRef.afterClosed().toPromise().then((productData: Product) => {
      if (productData) {
        const index = this.products.findIndex((product) => product._id === productData._id);
        if (index > -1) {
          if (this.products[index].__v !== productData.__v) {
            this.products.splice(index, 1, productData);
          }
        }
      }
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
      const product = new Product(
        name,
        price
      );

      // optional parameter
      if (description !== undefined) {
        product.description = description;
      }

      const newProduct: Product = await this.productService.createProduct(product);
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
    await this.productService.removeProduct(id);

    // remove product from List
    const index = this.products.findIndex((product) => product._id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
