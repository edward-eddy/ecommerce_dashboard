import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './Pages/category/category.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { ProductComponent } from './Pages/product/product.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { SubcategoryComponent } from './Pages/subcategory/subcategory.component';
import { SideNavComponent } from './Component/side-nav/side-nav.component';
import { MobileSideNavComponent } from './Component/mobile-side-nav/mobile-side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AreaChartComponent } from './Component/area-chart/area-chart.component';
import { BarChartComponent } from "./Component/bar-chart/bar-chart.component";
import { GroupOfRoutesComponent } from './Component/group-of-routes/group-of-routes.component';
import { LastAreaChartComponent } from './Component/last-area-chart/last-area-chart.component';

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
        AreaChartComponent,
        GroupOfRoutesComponent,
        LastAreaChartComponent,
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BarChartComponent
    ]
})
export class AppModule { }
