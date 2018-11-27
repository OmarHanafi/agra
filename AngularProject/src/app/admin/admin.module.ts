import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminHeaderComponent } from './components/adminheader/adminheader.component';
import { AdminHomeComponent } from './pages/adminhome/adminhome.component';
import { AdminProductComponent } from './pages/adminproduct/adminproduct.component';
import { AdminAddProductComponent } from './components/adminaddproduct/adminaddproduct.component';
import { AdminListProductComponent } from './components/adminlistproduct/adminlistproduct.component';

let adminPages = [AdminHomeComponent, AdminProductComponent];
let adminComponents = [AdminHeaderComponent, AdminAddProductComponent, AdminListProductComponent];

@NgModule({
  declarations: [
    adminPages, adminComponents
  ],
  imports: [
    SharedModule
  ]
})

export class AdminModule { }
