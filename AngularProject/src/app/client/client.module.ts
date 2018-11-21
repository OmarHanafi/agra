import { NgModule } from '@angular/core';
import { ClientHomeComponent } from './pages/clienthome/clienthome.component';
import { ClientNavbarComponent } from './components/clientnavbar/clientnavbar.component';
import { ClientProductComponent } from './pages/clientproduct/clientproduct.component';
import { ClientFooterComponent } from './components/clientfooter/clientfooter.component';
import { SharedModule } from '../shared/shared.module';
import { ClientCategoryComponent } from './pages/clientcategory/clientcategory.component';

let clientPages = [ClientHomeComponent, ClientProductComponent, ClientCategoryComponent];
let clientComponents = [ClientNavbarComponent, ClientFooterComponent];

@NgModule({
  declarations: [
    clientPages,
    clientComponents
  ],
  imports: [
    SharedModule
  ]
})
export class ClientModule { }
