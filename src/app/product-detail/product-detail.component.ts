import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IProduct } from '../product-list/product';
import { ProductService } from '../product-list/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router,
              private _productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        const id = Number(params['id']);
        this.getProduct(id);
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getProduct(id: number): void {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product Detail: ' + message;
  }
}
