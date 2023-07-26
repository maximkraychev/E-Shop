import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro-section/intro.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { BestSellingBooksComponent } from './best-selling-books/best-selling-books.component';
import { NewBooksSectionComponent } from './new-books-section/new-books-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    CategoriesSectionComponent,
    BestSellingBooksComponent,
    NewBooksSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
