import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';
import { MainComponent } from './shared/components/main/main.component';
import { ToporderCardsComponent } from './shared/components/toporder-cards/toporder-cards.component';
import { UserRegitrationComponent } from './shared/components/user-regitration/user-regitration.component';
import { LineGraphComponent } from './shared/components/line-graph/line-graph.component';
import { ColumnGraphComponent } from './shared/components/column-graph/column-graph.component';
import { DonutGraphComponent } from './shared/components/donut-graph/donut-graph.component';
import { TopNavbarComponent } from './shared/components/top-navbar/top-navbar.component';
import { TableOrderComponent } from './shared/components/table-order/table-order.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    MainComponent,
    ToporderCardsComponent,
    UserRegitrationComponent,
    LineGraphComponent,
    ColumnGraphComponent,
    DonutGraphComponent,
    TopNavbarComponent,
    TableOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
