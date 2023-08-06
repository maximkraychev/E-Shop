import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { TrimDirective } from './directives/trim-directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordMatchDirective } from './directives/password-match-validator.directive';
import { LoadButtonComponent } from './components/load-button/load-button.component';



@NgModule({
  declarations: [
    BookCardComponent,
    TrimDirective,
    PasswordMatchDirective,
    LoadButtonComponent
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
    PasswordMatchDirective,
    LoadButtonComponent
  ]
})
export class SharedModule { }
