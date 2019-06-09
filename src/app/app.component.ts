import { Component, OnInit } from '@angular/core';
import { ProductManagerService } from './managers/product-manager.service';

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
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'StephanDeeApp';
  public products = [];

  /**
   * The constructor of AppComponent.
   *
   * @param productManagerService This service handles all operations and methods for products.
   */
  constructor(public productManagerService: ProductManagerService) {
  }

  public ngOnInit(): void {
    fetch('http://localhost:3000/products').then((products) => {
      return products.json();
    }).then((productsJson) => {
      let productArray = [];
      productArray = Object.keys(productsJson).map((key) => productsJson[key]);
      this.products = productArray[0];
    });

    // this.productManagerService.getProducts();
  }

  public createProduct(product) {
    // post Product
    // this.productManagerService.createProduct(product);
    alert("created");
  }
}
