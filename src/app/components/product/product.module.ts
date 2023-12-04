import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

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
  {
    path: `detailproduct/:id`,
    component: DetailproductComponent,
    title: `product details`,
  },
];

@NgModule({
  declarations: [
    EditproductComponent,
    NewproductComponent,
    DetailproductComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    NgxDropzoneModule,
  ],
})
export class ProductModule {}
