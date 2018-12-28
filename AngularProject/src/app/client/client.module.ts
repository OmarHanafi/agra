import { NgModule } from '@angular/core';
import { ClientHomeComponent } from './pages/clienthome/clienthome.component';
import { ClientNavbarComponent } from './components/clientnavbar/clientnavbar.component';
import { ClientProductComponent } from './pages/clientproduct/clientproduct.component';
import { ClientFooterComponent } from './components/clientfooter/clientfooter.component';
import { SharedModule } from '../shared/shared.module';
import { ClientCategoryComponent } from './pages/clientcategory/clientcategory.component';
import { ClientcartComponent } from './pages/clientcart/clientcart.component';
import { ClientcheckoutComponent } from './pages/clientcheckout/clientcheckout.component';
import { Checkout1Component } from './components/checkout1/checkout1.component';
import { Checkout2Component } from './components/checkout2/checkout2.component';
import { Checkout3Component } from './components/checkout3/checkout3.component';
import { ClientordersComponent } from './pages/clientorders/clientorders.component';

let clientPages = [ClientHomeComponent, ClientProductComponent, ClientCategoryComponent,ClientcartComponent];
let clientComponents = [ClientNavbarComponent, ClientFooterComponent];

@NgModule({
  declarations: [
    clientPages,
    clientComponents,
    ClientcartComponent,
    ClientcheckoutComponent,
    Checkout1Component,
    Checkout2Component,
    Checkout3Component,
    ClientordersComponent
  ],
  imports: [
    
    SharedModule
  ]
})
export class ClientModule { }
