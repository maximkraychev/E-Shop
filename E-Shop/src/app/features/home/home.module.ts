import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro-section/intro.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    CategoriesSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
