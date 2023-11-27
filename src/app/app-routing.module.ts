import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { GroupOfRoutesComponent } from './components/group-of-routes/group-of-routes.component';
import { adminLoginGuard } from './guards/admin-login.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:"", component: GroupOfRoutesComponent, canActivate:[adminAuthGuard], children: [
    {path:"", component:DashboardComponent, title:"Admin Dashboard"},
    {path:"orders", component:OrdersComponent, title:"Orders Page"},
    {path:"register", component:RegisterComponent, title:"Register"},
    {path:"profile", component:ProfileComponent, title:"Admin Profile"},
    // {path:"product", component:ProductsComponent, title:"Product Page"},
    {
      path: 'product',
      loadChildren: () =>
        import('./components/product/product.module').then(
          (m) => m.ProductModule
        ),
    },

    // {path:"category", component:CategoryComponent, title:"Category Page"},
    {
      path: 'category',
      loadChildren: () =>
        import('./components/category/category.module').then(
          (m) => m.CategoryModule
        ),
    },
    {
      path: 'subcategory',
      loadChildren: () =>
        import('./components/subcategory/subcategory.module').then(
          (m) => m.SubcategoryModule
        ),
    },
    // {path:"subcategory", component:SubcategoryComponent, title:"Subcategory Page"},
  ]},
  {path:"login", component:LoginComponent, canActivate:[adminLoginGuard], title:"Login"},
  {path:"**", component:NotFoundComponent, title: "404 Page Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
