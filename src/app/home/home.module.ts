import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import { MoneyTrackOverviewComponent } from './money-track-overview/money-track-overview.component';
import { CustomCardComponent } from './money-track-overview/custom-card/custom-card.component';
import { CardModule } from 'primeng/card';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MoneyTrackOverviewComponent,
    CustomCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenubarModule,
    CardModule,
    TableModule,
  ]
})
export class HomeModule { }
