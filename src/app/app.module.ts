import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './Pages/category/category.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { ProductComponent } from './Pages/product/product.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { SubcategoryComponent } from './Pages/subcategory/subcategory.component';
import { SideNavComponent } from './Component/side-nav/side-nav.component';
import { MobileSideNavComponent } from './Component/mobile-side-nav/mobile-side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Component/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UserContainerComponent } from './Pages/user-container/user-container.component';
import { AuthContainerComponent } from './Pages/auth-container/auth-container.component';
import { UserProfileComponent } from './Component/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    OrdersComponent,
    ProductComponent,
    ProfileComponent,
    SubcategoryComponent,
    SideNavComponent,
    MobileSideNavComponent,
    RegisterComponent,
    UserContainerComponent,
    AuthContainerComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
