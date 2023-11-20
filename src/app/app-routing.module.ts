import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductComponent } from './Pages/product/product.component';
import { CategoryComponent } from './Pages/category/category.component';
import { SubcategoryComponent } from './Pages/subcategory/subcategory.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { LoginComponent } from './Pages/login/login.component';


const routes: Routes = [
  {path:"", component:DashboardComponent, title:"Admin Dashboard"},
  {path:"profile", component:ProfileComponent, title:"Admin Profile"},
  {path:"product", component:ProductComponent, title:"Product Page"},
  {path:"orders", component:ProductComponent, title:"Orders Page"},
  {path:"category", component:CategoryComponent, title:"Category Page"},
  {path:"subcategory", component:SubcategoryComponent, title:"Subcategory Page"},
  {path:"login", component:LoginComponent, title:"Login"},
  {path:"**", component:NotFoundComponent, title: "404 Page Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
