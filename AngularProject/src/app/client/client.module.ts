import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomeComponent } from './pages/clienthome/clienthome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientNavbarComponent } from './components/clientnavbar/clientnavbar.component';
import { ClientProductComponent } from './pages/clientproduct/clientproduct.component';
import { ClientFooterComponent } from './components/clientfooter/clientfooter.component';

let clientPages = [ClientHomeComponent, ClientProductComponent];
let clientComponents = [ClientNavbarComponent, ClientFooterComponent];

@NgModule({
  declarations: [
    clientPages,
    clientComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ClientModule { }
