import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';



@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookCardComponent
  ]
})
export class SharedModule { }
