import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `subcategory`,
    component: SubcategoryComponent,
    title: `All subcategory`,
  },
];

@NgModule({
  declarations: [SubcategoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubcategoryModule {}
