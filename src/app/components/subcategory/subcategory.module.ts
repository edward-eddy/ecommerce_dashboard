import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsubcategoryComponent } from './newsubcategory/newsubcategory.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { EditsubcategoryComponent } from './editsubcategory/editsubcategory.component';
import { DetailsubcategoryComponent } from './detailsubcategory/detailsubcategory.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: `subcategory`,
    component: SubcategoryComponent,
    title: `All subcategory`,
  },
  {
    path: `newsubcategory`,
    component: NewsubcategoryComponent,
    title: `new subcategory`,
  },
  {
    path: `detailsubcategory/:id`,
    component: DetailsubcategoryComponent,
    title: `subcategory details`,
  },
  {
    path: `editsubcategory/:id`,
    component: EditsubcategoryComponent,
    title: `category edit`,
  },
];

@NgModule({
  declarations: [
    NewsubcategoryComponent,
    SubcategoryComponent,
    EditsubcategoryComponent,
    DetailsubcategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
  ],
})
export class SubcategoryModule {}
