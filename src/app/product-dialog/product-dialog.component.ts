import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ProductManagerService } from '../managers/product-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

/*
 * The product dialog component to edit products.
 *
 * @Author: Stephan Dünkel 
 * @Date: 2019-06-16 14:20:25 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-16 20:08:21
 */
@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
  providers: [ProductManagerService]
})
export class ProductDialogComponent implements OnInit, OnDestroy {
  public productDialogForm: FormGroup;
  public getProductSubscription: Subscription;
  public product: Product;

  /**
   * The Constructor of ProductDialogComponent.
   *
   * @param dialog The Dialog
   * @param productService This service handles all operations and methods for products
   * @param formBuilder This is used to create formGroup with validations
   * @param data injected product data (product ID)
   */
  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    public productService: ProductManagerService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public async ngOnInit(): Promise<void> {
    this.initForm();
    this.getProductSubscription = await this.productService.getProduct(this.data['productId']).subscribe((productData: Product) => {
      this.product = productData;
      this.resetForm(productData);
    });
  }

  public ngOnDestroy(): void {
    this.getProductSubscription.unsubscribe();
  }

  /**
   * Initialize the form.
   */
  public initForm(): void {
    this.productDialogForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'description': [''],
      'price': ['', Validators.required]
    });
  }

  /**
   * Reset the form.
   *
   * @param initProduct The initial product.
   */
  public resetForm(initProduct: Product): void {
    this.productDialogForm.reset({
      'name': initProduct.name,
      'description': initProduct.description,
      'price': initProduct.price
    });
  }

  /**
   * Update Product.
   *
   * @param currentProduct The current product.
   * @param newProductValue The product body.
   */
  public async updateProduct(currentProduct: Product, newProductValue: Product): Promise<void> {
    const updatedProduct: Product = {
      _id: currentProduct._id,
      date: currentProduct.date,
      name: newProductValue.name,
      description: newProductValue.description,
      price: newProductValue.price,
      __v: currentProduct.__v
    }

    const newProduct: Product = await this.productService.updateProduct(updatedProduct);
    if (newProduct) {
      this.product = newProduct;
    }
  }

  /**
   * Close the Dialog.
   *
   * @param updatedProduct The updated product
   */
  public closeDialog(updatedProduct: Product): void {
    if (updatedProduct) {
      this.dialogRef.close(updatedProduct);
    }
  }
}
