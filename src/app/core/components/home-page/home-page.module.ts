import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        HomePageComponent,
        NavBarComponent,
        FooterComponent
    ],
  exports: [
    FooterComponent,
    NavBarComponent
  ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        MatToolbarModule,
        MatButtonModule
    ]
})
export class HomePageModule { }
