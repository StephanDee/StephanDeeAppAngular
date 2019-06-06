import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'StephanDeeApp';
  public products = [];

  constructor() {
  }

  public ngOnInit(): void {
    fetch('http://localhost:3000/products').then((products) => {
      return products.json();
    }).then((productsJson) => {
      let productArray = [];
      productArray = Object.keys(productsJson).map((key) => productsJson[key]);
      this.products = productArray[0];
    });
  }

  public createProduct() {
    // post Product
    alert("created");
  }
}
