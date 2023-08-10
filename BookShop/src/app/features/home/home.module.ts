import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro-section/intro.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { ExploreComponent } from './explore-section/explore.component';
import { BestDiscountsComponent } from './best-discounts-section/best-discounts.component';
import { WhyChooseUsSectionComponent } from './why-choose-us-section/why-choose-us-section.component';
import { BlogPostsSectionComponent } from './blog-posts-section/blog-posts-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    CategoriesSectionComponent,
    ExploreComponent,
    BestDiscountsComponent,
    WhyChooseUsSectionComponent,
    BlogPostsSectionComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
