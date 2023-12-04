import { NgModule, Component } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoryComponent } from './pages/category/category.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { AreaLastChartComponent } from './components/area-last-chart/area-last-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MobileSideNavComponent } from './components/mobile-side-nav/mobile-side-nav.component';
import { GroupOfRoutesComponent } from './components/group-of-routes/group-of-routes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { adminTokenInterceptor } from './admin-token.interceptor';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductCardOrderDetailsComponent } from './components/product-card-order-details/product-card-order-details.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    ProfileComponent,
    CategoryComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    AreaChartComponent,
    AreaLastChartComponent,
    BarChartComponent,
    SideNavComponent,
    MobileSideNavComponent,
    GroupOfRoutesComponent,
    ResetPasswordComponent,
    OrderCardComponent,
    OrderDetailsComponent,
    ProductCardOrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: adminTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
