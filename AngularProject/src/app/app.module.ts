import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from "@angular/common/http";
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientModule } from './client/client.module';

>>>>>>> 6867cb2e564f57e8da679659489d32bda0830c54
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    FormsModule,
    HttpClientModule,
    ClientModule
>>>>>>> 6867cb2e564f57e8da679659489d32bda0830c54
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
