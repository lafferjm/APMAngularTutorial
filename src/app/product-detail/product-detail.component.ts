import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../product-list/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this._route.snapshot.params['id']);
    this.pageTitle += `: ${id}`;
  }
}
