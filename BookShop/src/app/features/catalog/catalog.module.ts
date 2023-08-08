import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogService } from './catalog.service';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CatalogRoutingModule,
    SharedModule
  ],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
