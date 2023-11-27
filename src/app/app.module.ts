import { NgModule, Component } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
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
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    AreaChartComponent,
    AreaLastChartComponent,
    BarChartComponent,
    SideNavComponent,
    MobileSideNavComponent,
    GroupOfRoutesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
