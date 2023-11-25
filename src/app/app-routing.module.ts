import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductComponent } from './Pages/product/product.component';
import { CategoryComponent } from './Pages/category/category.component';
import { SubcategoryComponent } from './Pages/subcategory/subcategory.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { UserContainerComponent } from './Pages/user-container/user-container.component';
import { AuthContainerComponent } from './Pages/auth-container/auth-container.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';
import { GroupOfRoutesComponent } from './Component/group-of-routes/group-of-routes.component';


const routes: Routes = [
  {path:"", component: GroupOfRoutesComponent, children: [
    {path:"", component:DashboardComponent, title:"Admin Dashboard"},
    {path:"profile", component:ProfileComponent, title:"Admin Profile"},
    {path:"product", component:ProductComponent, title:"Product Page"},
    {path:"orders", component:ProductComponent, title:"Orders Page"},
    {path:"category", component:CategoryComponent, title:"Category Page"},
    {path:"subcategory", component:SubcategoryComponent, title:"Subcategory Page"},
    {path:"register", component:RegisterComponent, title:"Register"},
  ]},
  {path:"login", component:LoginComponent, title:"Login"},
  {path:"**", component:NotFoundComponent, title: "404 Page Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
