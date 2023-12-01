import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products';
import { ProductServices } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test angular';
  //статика
  // products: IProduct[] = data;

  //апи вариант 1
  // products: IProduct[] = [];
  // loading = false;

  // constructor(private productService: ProductServices) {}

  // ngOnInit(): void {
  //   this.loading = true;
  //   this.productService.getAll().subscribe((products) => {
  //     this.products = products;
  //     this.loading = false;
  //   });
  // }

  //апи вариант 2
  loading = false;
  products$: Observable<IProduct[]>;

  constructor(private productService: ProductServices) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
  }
}
