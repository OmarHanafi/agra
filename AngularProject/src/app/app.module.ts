import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

let Modules = [ClientModule, LoginModule, SharedModule];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
