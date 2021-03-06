import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class SharedModule { }
