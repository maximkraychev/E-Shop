import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CatalogRoutingModule,
    SharedModule
  ]
})
export class CatalogModule { }
