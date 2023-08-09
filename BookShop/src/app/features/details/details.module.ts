import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsService } from './details.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    SharedModule,
    DetailsRoutingModule
  ],
  providers: [
    DetailsService
  ]
})
export class DetailsModule { }
