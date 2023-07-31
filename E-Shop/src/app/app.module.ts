import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { environment } from '../environments/environment';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
//import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { provideFunctions,getFunctions } from '@angular/fire/functions';
//import { provideMessaging,getMessaging } from '@angular/fire/messaging';
//import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
//import { provideStorage,getStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    CoreModule
     
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    //provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    //provideFunctions(() => getFunctions()),
    //provideMessaging(() => getMessaging()),
    //provideRemoteConfig(() => getRemoteConfig()),
    //provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
