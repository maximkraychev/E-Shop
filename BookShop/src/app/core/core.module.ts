import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { MainLoaderComponent } from './main-loader/main-loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainLoaderComponent
  ]
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }

}
