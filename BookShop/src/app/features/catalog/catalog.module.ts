import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FeaturesModule } from '../features.module';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FeaturesModule
  ]
})
export class CatalogModule { }
