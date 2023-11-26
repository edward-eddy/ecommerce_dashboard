import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewproductComponent } from './newproduct/newproduct.component';
import { FormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  {
    path: `product`,
    component: ProductComponent,
    title: `All products`,
  },
  {
    path: `newproduct`,
    component: NewproductComponent,
    title: `new product`,
  },
  {
    path: `editproduct/:id`,
    component: EditproductComponent,
    title: `edit product`,
  },
];

@NgModule({
  declarations: [ProductComponent, NewproductComponent, EditproductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
  ],
})
export class ProductModule {}
