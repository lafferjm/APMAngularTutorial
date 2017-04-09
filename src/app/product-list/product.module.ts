import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarModule } from '../star/star.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductGuardService } from '../product-detail/product-guard.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductGuardService ], component: ProductDetailComponent },
    ]),
    StarModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
