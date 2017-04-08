import { Component } from '@angular/core';

import { IProduct } from '../product-list/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {
  pageTitle = 'Product Detail';
  product: IProduct;
}
