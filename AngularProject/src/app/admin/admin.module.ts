import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminHeaderComponent } from './components/adminheader/adminheader.component';
import { AdminHomeComponent } from './pages/adminhome/adminhome.component';

let adminPages = [AdminHomeComponent];
let adminComponents = [AdminHeaderComponent];

@NgModule({
  declarations: [
    adminPages, adminComponents
  ],
  imports: [
    SharedModule
  ]
})

export class AdminModule { }
