import { NgModule } from '@angular/core';
import { ClientHomeComponent } from './pages/clienthome/clienthome.component';
import { ClientNavbarComponent } from './components/clientnavbar/clientnavbar.component';
import { ClientProductComponent } from './pages/clientproduct/clientproduct.component';
import { ClientFooterComponent } from './components/clientfooter/clientfooter.component';
import { SharedModule } from '../shared/shared.module';
import { ClientCategoryComponent } from './pages/clientcategory/clientcategory.component';
import { ClientcartComponent } from './pages/clientcart/clientcart.component';

let clientPages = [ClientHomeComponent, ClientProductComponent, ClientCategoryComponent,ClientcartComponent];
let clientComponents = [ClientNavbarComponent, ClientFooterComponent];

@NgModule({
  declarations: [
    clientPages,
    clientComponents,
    ClientcartComponent
  ],
  imports: [
    
    SharedModule
  ]
})
export class ClientModule { }
