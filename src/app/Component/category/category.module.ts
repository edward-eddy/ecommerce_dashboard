import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';

const routes: Routes = [
  {
    path: `category`,
    component: CategoryComponent,
    title: `All category`,
  },
  {
    path: `newcategory`,
    component: NewcategoryComponent,
    title: `new category`,
  },
  {
    path: `detailcategory/:id`,
    component: DetailcategoryComponent,
    title: `category details`,
  },
  {
    path: `editcategory/:id`,
    component: EditcategoryComponent,
    title: `category edit`,
  },
];

@NgModule({
  declarations: [
    CategoryComponent,
    NewcategoryComponent,
    DetailcategoryComponent,
    EditcategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
  ],
})
export class CategoryModule {}
