import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientHomeComponent } from './client/pages/clienthome/clienthome.component';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  {path : "client/home", component : ClientHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    ,ClientModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
