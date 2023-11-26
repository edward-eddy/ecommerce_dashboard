import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { CategoryComponent } from './Pages/category/category.component';
import { SubcategoryComponent } from './Pages/subcategory/subcategory.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { LoginComponent } from './Pages/login/login.component';
import { NewsubcategoryComponent } from './Pages/newsubcategory/newsubcategory.component';
import { NewcategoryComponent } from './Pages/newcategory/newcategory.component';
import { NewproductComponent } from './Pages/newproduct/newproduct.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Admin Dashboard' },
  { path: 'profile', component: ProfileComponent, title: 'Admin Profile' },
  {
    path: 'products',
    loadChildren: () =>
      import('./Component/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  // { path: 'orders', component: ProductComponent, title: 'Orders Page' },
  { path: 'category', component: CategoryComponent, title: 'Category Page' },
  {
    path: 'newproduct',
    component: NewproductComponent,
    title: 'new product Page',
  },
  {
    path: 'newcategory',
    component: NewcategoryComponent,
    title: 'new Category Page',
  },
  {
    path: 'newsubcategory',
    component: NewsubcategoryComponent,
    title: 'new subcategory',
  },
  {
    path: 'subcategory',
    component: SubcategoryComponent,
    title: 'Subcategory Page',
  },
  { path: 'login', component: LoginComponent, title: 'Login' },
  // {
  //   path: 'subcategory',
  //   loadChildren: () =>
  //     import('./Component/subcategory/subcategory.module').then(
  //       (m) => m.SubcategoryModule
  //     ),
  // },
  { path: '**', component: NotFoundComponent, title: '404 Page Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
