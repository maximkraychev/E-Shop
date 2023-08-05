import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { TrimDirective } from './directives/trim-directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordMatchDirective } from './directives/password-match-validator.directive';



@NgModule({
  declarations: [
    BookCardComponent,
    TrimDirective,
    PasswordMatchDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BookCardComponent,
    TrimDirective,
    PasswordMatchDirective
  ]
})
export class SharedModule { }
