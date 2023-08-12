import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookRoutingModule } from './create-book.routing-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateBookComponent } from './create-book.component';



@NgModule({
  declarations: [
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    CreateBookRoutingModule,
    SharedModule
  ]
})
export class CreateBookModule { }
